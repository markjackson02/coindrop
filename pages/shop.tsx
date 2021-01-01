/* eslint-disable arrow-body-style */
/* eslint-disable react/no-danger */
// eslint-disable-next-line no-unused-vars
import { FC, useState, useEffect } from 'react';
import { Box, Select, Heading, Text, Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { withDefaultLayout } from '../components/Layout/DefaultLayoutHOC';

// script execution issue references...
    // https://github.com/vercel/next.js/issues/4477
    // https://www.npmjs.com/package/react-load-script
    // https://medium.com/better-programming/loading-third-party-scripts-dynamically-in-reactjs-458c41a7013d
    // https://usehooks.com/useScript/
    // add/remove script on page changes https://nextjs.org/docs/api-reference/next/router

class ProductData {
    buyButtonCode: () => ({ __html: string })

    quantity: number

    price: number

    pricePer: string

    constructor({ buyButtonCode, quantity, price }) {
        this.buyButtonCode = buyButtonCode;
        this.quantity = quantity;
        this.price = price;
        this.pricePer = `${((price / quantity) * 100).toPrecision(2)}¢`;
    }
}

function ecwidContainerTest() {
    return {__html: '<div class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-276239705" itemtype="http://schema.org/Product" data-single-product-id="276239705"><div class="ecsp-title" itemprop="name" style="display:none;" content="500 Tip Cards"></div><div customprop="addtobag"></div></div>'};
}

const products: Record<string, ProductData> = {
    tip500: new ProductData({
        buyButtonCode: function ecwidBuyNowTip500() {
            return {__html: '<div class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-276239705" itemtype="http://schema.org/Product" data-single-product-id="276239705"><div class="ecsp-title" itemprop="name" style="display:none;" content="500 Tip Cards"></div><div customprop="addtobag"></div></div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?44137065&data_platform=singleproduct_v2" charset="utf-8"></script><script type="text/javascript">xProduct()</script>'};
        },
        price: 19,
        quantity: 500,
    }),
    tip1000: new ProductData({
        buyButtonCode: function ecwidBuyNowTip1000() {
            return {__html: '<div class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-276385182" itemtype="http://schema.org/Product" data-single-product-id="276385182"><div class="ecsp-title" itemprop="name" style="display:none;" content="1000 Tip Cards"></div><div customprop="addtobag"></div></div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?44137065&data_platform=singleproduct_v2" charset="utf-8"></script><script type="text/javascript">xProduct()</script>'};
        },
        price: 29,
        quantity: 1000,
    }),
    tip2500: new ProductData({
        buyButtonCode: function ecwidBuyNowTip2500() {
            return {__html: '<div class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-276366536" itemtype="http://schema.org/Product" data-single-product-id="276366536"><div class="ecsp-title" itemprop="name" style="display:none;" content="2500 Tip Cards"></div><div customprop="addtobag"></div></div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?44137065&data_platform=singleproduct_v2" charset="utf-8"></script><script type="text/javascript">xProduct()</script>'};
        },
        price: 59,
        quantity: 2500,
    }),
    tip5000: new ProductData({
        buyButtonCode: function ecwidBuyNowTip5000() {
            return {__html: '<div class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-276417412" itemtype="http://schema.org/Product" data-single-product-id="276417412"><div class="ecsp-title" itemprop="name" style="display:none;" content="5000 Tip Cards"></div><div customprop="addtobag"></div></div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?44137065&data_platform=singleproduct_v2" charset="utf-8"></script><script type="text/javascript">xProduct()</script>'};
        },
        price: 89,
        quantity: 5000,
    }),
    tip10000: new ProductData({
        buyButtonCode: function ecwidBuyNowTip10000() {
            return {__html: '<div class="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-276426349" itemtype="http://schema.org/Product" data-single-product-id="276426349"><div class="ecsp-title" itemprop="name" style="display:none;" content="10,000 Tip Cards"></div><div customprop="addtobag"></div></div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?44137065&data_platform=singleproduct_v2" charset="utf-8"></script><script type="text/javascript">xProduct()</script>'};
        },
        price: 159,
        quantity: 10000,
    }),
};

const TipCardBuyButtons: FC<{ selectedId: string}> = ({ selectedId }) => (
    <>
    <Box display={selectedId === 'tip500' ? 'initial' : 'none'} dangerouslySetInnerHTML={products.tip500.buyButtonCode()} />
    <Box display={selectedId === 'tip1000' ? 'initial' : 'none'} dangerouslySetInnerHTML={products.tip1000.buyButtonCode()} />
    <Box display={selectedId === 'tip2500' ? 'initial' : 'none'} dangerouslySetInnerHTML={products.tip2500.buyButtonCode()} />
    <Box display={selectedId === 'tip5000' ? 'initial' : 'none'} dangerouslySetInnerHTML={products.tip5000.buyButtonCode()} />
    <Box display={selectedId === 'tip10000' ? 'initial' : 'none'} dangerouslySetInnerHTML={products.tip10000.buyButtonCode()} />
    </>
);

const Shop: FC = () => {
    const [selectedTipCard, setSelectedTipCard] = useState("tip500");
    const router = useRouter();
    useEffect(() => {
        console.log('router.query', router.query);
        if (!router.query.r) {
            router.push({ pathname: '/shop', query: { r: 1 }});
            router.reload();
        }
    }, [router]);
    return (
        <Box>
            <Heading
                as="h1"
                size="2xl"
                textAlign="center"
                my={6}
            >
                Shop
            </Heading>
            <Box>
                <Flex
                    direction={["column", "row"]}
                    align={["center", "start"]}
                >
                    <Box>
                        <Image src="/shop/tip-card.png" height="300" width="300" />
                    </Box>
                    <Box ml={4}>
                        <Heading mb={3}>Tip Cards</Heading>
                        <Flex direction="row" wrap="wrap" align="center">
                            <Text>Quantity:</Text>
                            <Select
                                value={selectedTipCard}
                                onChange={(event) => {
                                    setSelectedTipCard(event.target.value);
                                }}
                            >
                                <option value="tip500">500</option>
                                <option value="tip1000">1000</option>
                                <option value="tip2500">2500</option>
                                <option value="tip5000">5000</option>
                                <option value="tip10000">10000</option>
                            </Select>
                        </Flex>
                        <Flex direction="row" wrap="wrap" align="center" justify="center">
                            <Text fontSize="3xl" fontWeight="bold">
                                ${products[selectedTipCard].price}
                            </Text>
                            <Text fontSize="sm" ml={2}>
                                {` (${products[selectedTipCard].pricePer} per card)`}
                            </Text>
                        </Flex>
                        <TipCardBuyButtons selectedId={selectedTipCard} />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default withDefaultLayout(Shop);
