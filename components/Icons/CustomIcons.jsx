// If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
// https://cryptologos.cc/

import { createIcon } from "@chakra-ui/react";

export const HamburgerMenuIcon = createIcon({
    displayName: "HamburgerMenuIcon",
    path: <path fill="currentColor" d="M492 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 76H20C8.954 76 0 84.954 0 96s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 396H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />,
    viewBox: "0 0 512 512",
});

export const GithubIcon = createIcon({
    displayName: "GithubIcon",
    path: <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />,
});

// export const HomeIcon = createIcon({
//     displayName: "HomeIcon",
//     path: <path d="M472.847 226.846l-34.116-34.116L250.998 4.997c-6.664-6.663-17.468-6.663-24.132 0L39.132 192.73 4.999 226.864c-6.548 6.78-6.361 17.584.419 24.132 6.614 6.388 17.099 6.388 23.713 0l4.983-5.018v214.801c0 9.426 7.641 17.067 17.067 17.067h375.467c9.426 0 17.067-7.641 17.067-17.067V245.978l5 5.001c6.78 6.548 17.584 6.36 24.132-.419 6.388-6.614 6.388-17.1 0-23.714zM290.115 443.713h-102.4V307.179h102.4v136.534zm119.466 0h-85.333v-153.6c0-9.426-7.641-17.067-17.067-17.067H170.648c-9.426 0-17.067 7.641-17.067 17.067v153.6H68.248V211.845L238.914 41.178l170.667 170.667v231.868z"/>,
//     viewBox: "0 0 477.846 477.846",
// });

export const LogoutIcon = createIcon({
    displayName: "LogoutIcon",
    path: (
        <g>
            <path d="M255.15 468.625H63.787c-11.737 0-21.262-9.526-21.262-21.262V64.638c0-11.737 9.526-21.262 21.262-21.262H255.15c11.758 0 21.262-9.504 21.262-21.262S266.908.85 255.15.85H63.787C28.619.85 0 29.47 0 64.638v382.724c0 35.168 28.619 63.787 63.787 63.787H255.15c11.758 0 21.262-9.504 21.262-21.262 0-11.758-9.504-21.262-21.262-21.262z" />
            <path d="M505.664 240.861L376.388 113.286c-8.335-8.25-21.815-8.143-30.065.213s-8.165 21.815.213 30.065l92.385 91.173H191.362c-11.758 0-21.262 9.504-21.262 21.262 0 11.758 9.504 21.263 21.262 21.263h247.559l-92.385 91.173c-8.377 8.25-8.441 21.709-.213 30.065a21.255 21.255 0 0015.139 6.336c5.401 0 10.801-2.041 14.926-6.124l129.276-127.575A21.303 21.303 0 00512 255.998c0-5.696-2.275-11.118-6.336-15.137z" />
        </g>
    ),
    viewBox: "0 0 512 512",
});

export const SourceCodeIcon = createIcon({
    displayName: "SourceCodeIcon",
    path: <path fill="currentColor" d="M506.76 242.828l-118.4-125.44c-7.277-7.718-19.424-8.07-27.142-.787-7.706 7.277-8.064 19.43-.781 27.142l105.965 112.256-105.965 112.269c-7.283 7.712-6.925 19.859.781 27.142a19.151 19.151 0 0013.178 5.235 19.172 19.172 0 0013.965-6.01l118.4-125.446c6.981-7.404 6.981-18.963-.001-26.361zM151.566 368.262L45.608 255.999l105.958-112.262c7.277-7.712 6.925-19.866-.787-27.142-7.706-7.277-19.866-6.925-27.142.787l-118.4 125.44c-6.982 7.398-6.982 18.963 0 26.362L123.643 394.63c3.776 4 8.864 6.016 13.965 6.016 4.723 0 9.466-1.741 13.171-5.242 7.719-7.277 8.064-19.43.787-27.142zM287.061 52.697c-10.477-1.587-20.282 5.606-21.882 16.083l-56.32 368.64c-1.6 10.483 5.6 20.282 16.083 21.882.986.147 1.958.218 2.925.218 9.325 0 17.504-6.803 18.957-16.301l56.32-368.64c1.6-10.484-5.6-20.282-16.083-21.882z" />,
    viewBox: "0 0 511.997 511.997",
});

export const ShareIcon = createIcon({
    displayName: "ShareIcon",
    path: <path fill="currentColor" d="M406 332c-29.641 0-55.761 14.581-72.167 36.755L191.99 296.124c2.355-8.027 4.01-16.346 4.01-25.124 0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307 167.424 378.589 180 406 180c49.629 0 90-40.371 90-90S455.629 0 406 0s-90 40.371-90 90c0 11.437 2.355 22.286 6.262 32.358l-148.887 89.59C156.869 193.136 132.937 181 106 181c-49.629 0-90 40.371-90 90s40.371 90 90 90c30.13 0 56.691-15.009 73.035-37.806l141.376 72.395C317.807 403.995 316 412.75 316 422c0 49.629 40.371 90 90 90s90-40.371 90-90-40.371-90-90-90z" />,
    viewBox: "0 0 512 512",
});

export const PatreonIcon = createIcon({
    displayName: "PatreonIcon",
    path: (
        <g>
            <circle cx="362.59" cy="204.59" fill="#e85b46" r="204.59" />
            <path d="M0 0h100v545.8H0z" fill="#241e12" />
        </g>
    ),
    viewBox: "0 0 567.18 545.8",
});

export const BuyMeACoffeeIcon = createIcon({
    displayName: "BuyMeACoffeeIcon",
    path: (
        <g>
            <path d="M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518Z" fill="#0D0C22" />
            <path d="M803.896 388.891L802.916 389.166L803.896 388.891Z" fill="#0D0C22" />
            <path d="M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377Z" fill="#0D0C22" />
            <path d="M791.113 297.529H791.244V297.447L791.113 297.529Z" fill="#0D0C22" />
            <path d="M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.04C804.702 387.444 803.846 388.016 803.111 388.726Z" fill="#0D0C22" />
            <path d="M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515Z" fill="#0D0C22" />
            <path d="M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z" fill="#0D0C22" />
            <path d="M641.187 1144.63C641.187 1143.33 640.551 1143.57 640.705 1148.21C640.705 1147.84 640.86 1147.46 640.929 1147.1C641.015 1146.27 641.084 1145.46 641.187 1144.63Z" fill="#0D0C22" />
            <path d="M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z" fill="#0D0C22" />
            <path d="M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z" fill="#0D0C22" />
            <path d="M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1163.94L247.841 1164.01Z" fill="#0D0C22" />
            <path d="M472.623 590.836C426.682 610.503 374.546 632.802 306.976 632.802C278.71 632.746 250.58 628.868 223.353 621.274L270.086 1101.08C271.74 1121.13 280.876 1139.83 295.679 1153.46C310.482 1167.09 329.87 1174.65 349.992 1174.65C349.992 1174.65 416.254 1178.09 438.365 1178.09C462.161 1178.09 533.516 1174.65 533.516 1174.65C553.636 1174.65 573.019 1167.08 587.819 1153.45C602.619 1139.82 611.752 1121.13 613.406 1101.08L663.459 570.876C641.091 563.237 618.516 558.161 593.068 558.161C549.054 558.144 513.591 573.303 472.623 590.836Z" fill="#FFDD00" />
            <path d="M78.6885 386.132L79.4799 386.872L79.9962 387.182C79.5987 386.787 79.1603 386.435 78.6885 386.132Z" fill="#0D0C22" />
            <path d="M879.567 341.849L872.53 306.352C866.215 274.503 851.882 244.409 819.19 232.898C808.711 229.215 796.821 227.633 788.786 220.01C780.751 212.388 778.376 200.55 776.518 189.572C773.076 169.423 769.842 149.257 766.314 129.143C763.269 111.85 760.86 92.4243 752.928 76.56C742.604 55.2584 721.182 42.8009 699.88 34.559C688.965 30.4844 677.826 27.0375 666.517 24.2352C613.297 10.1947 557.342 5.03277 502.591 2.09047C436.875 -1.53577 370.983 -0.443234 305.422 5.35968C256.625 9.79894 205.229 15.1674 158.858 32.0469C141.91 38.224 124.445 45.6399 111.558 58.7341C95.7448 74.8221 90.5829 99.7026 102.128 119.765C110.336 134.012 124.239 144.078 138.985 150.737C158.192 159.317 178.251 165.846 198.829 170.215C256.126 182.879 315.471 187.851 374.007 189.968C438.887 192.586 503.87 190.464 568.44 183.618C584.408 181.863 600.347 179.758 616.257 177.304C634.995 174.43 647.022 149.928 641.499 132.859C634.891 112.453 617.134 104.538 597.055 107.618C594.095 108.082 591.153 108.512 588.193 108.942L586.06 109.252C579.257 110.113 572.455 110.915 565.653 111.661C551.601 113.175 537.515 114.414 523.394 115.378C491.768 117.58 460.057 118.595 428.363 118.647C397.219 118.647 366.058 117.769 334.983 115.722C320.805 114.793 306.661 113.611 292.552 112.177C286.134 111.506 279.733 110.801 273.333 110.009L267.241 109.235L265.917 109.046L259.602 108.134C246.697 106.189 233.792 103.953 221.025 101.251C219.737 100.965 218.584 100.249 217.758 99.2193C216.932 98.1901 216.482 96.9099 216.482 95.5903C216.482 94.2706 216.932 92.9904 217.758 91.9612C218.584 90.9319 219.737 90.2152 221.025 89.9293H221.266C232.33 87.5721 243.479 85.5589 254.663 83.8038C258.392 83.2188 262.131 82.6453 265.882 82.0832H265.985C272.988 81.6186 280.026 80.3625 286.994 79.5366C347.624 73.2301 408.614 71.0801 469.538 73.1014C499.115 73.9618 528.676 75.6996 558.116 78.6935C564.448 79.3474 570.746 80.0357 577.043 80.8099C579.452 81.1025 581.878 81.4465 584.305 81.7391L589.191 82.4445C603.438 84.5667 617.61 87.1419 631.708 90.1703C652.597 94.7128 679.422 96.1925 688.713 119.077C691.673 126.338 693.015 134.408 694.649 142.03L696.732 151.752C696.786 151.926 696.826 152.105 696.852 152.285C701.773 175.227 706.7 198.169 711.632 221.111C711.994 222.806 712.002 224.557 711.657 226.255C711.312 227.954 710.621 229.562 709.626 230.982C708.632 232.401 707.355 233.6 705.877 234.504C704.398 235.408 702.75 235.997 701.033 236.236H700.895L697.884 236.649L694.908 237.044C685.478 238.272 676.038 239.419 666.586 240.486C647.968 242.608 629.322 244.443 610.648 245.992C573.539 249.077 536.356 251.102 499.098 252.066C480.114 252.57 461.135 252.806 442.162 252.771C366.643 252.712 291.189 248.322 216.173 239.625C208.051 238.662 199.93 237.629 191.808 236.58C198.106 237.389 187.231 235.96 185.029 235.651C179.867 234.928 174.705 234.177 169.543 233.397C152.216 230.798 134.993 227.598 117.7 224.793C96.7944 221.352 76.8005 223.073 57.8906 233.397C42.3685 241.891 29.8055 254.916 21.8776 270.735C13.7217 287.597 11.2956 305.956 7.64786 324.075C4.00009 342.193 -1.67805 361.688 0.472751 380.288C5.10128 420.431 33.165 453.054 73.5313 460.35C111.506 467.232 149.687 472.807 187.971 477.556C338.361 495.975 490.294 498.178 641.155 484.129C653.44 482.982 665.708 481.732 677.959 480.378C681.786 479.958 685.658 480.398 689.292 481.668C692.926 482.938 696.23 485.005 698.962 487.717C701.694 490.429 703.784 493.718 705.08 497.342C706.377 500.967 706.846 504.836 706.453 508.665L702.633 545.797C694.936 620.828 687.239 695.854 679.542 770.874C671.513 849.657 663.431 928.434 655.298 1007.2C653.004 1029.39 650.71 1051.57 648.416 1073.74C646.213 1095.58 645.904 1118.1 641.757 1139.68C635.218 1173.61 612.248 1194.45 578.73 1202.07C548.022 1209.06 516.652 1212.73 485.161 1213.01C450.249 1213.2 415.355 1211.65 380.443 1211.84C343.173 1212.05 297.525 1208.61 268.756 1180.87C243.479 1156.51 239.986 1118.36 236.545 1085.37C231.957 1041.7 227.409 998.039 222.9 954.381L197.607 711.615L181.244 554.538C180.968 551.94 180.693 549.376 180.435 546.76C178.473 528.023 165.207 509.681 144.301 510.627C126.407 511.418 106.069 526.629 108.168 546.76L120.298 663.214L145.385 904.104C152.532 972.528 159.661 1040.96 166.773 1109.41C168.15 1122.52 169.44 1135.67 170.885 1148.78C178.749 1220.43 233.465 1259.04 301.224 1269.91C340.799 1276.28 381.337 1277.59 421.497 1278.24C472.979 1279.07 524.977 1281.05 575.615 1271.72C650.653 1257.95 706.952 1207.85 714.987 1130.13C717.282 1107.69 719.576 1085.25 721.87 1062.8C729.498 988.559 737.115 914.313 744.72 840.061L769.601 597.451L781.009 486.263C781.577 480.749 783.905 475.565 787.649 471.478C791.392 467.391 796.352 464.617 801.794 463.567C823.25 459.386 843.761 452.245 859.023 435.916C883.318 409.918 888.153 376.021 879.567 341.849ZM72.4301 365.835C72.757 365.68 72.1548 368.484 71.8967 369.792C71.8451 367.813 71.9483 366.058 72.4301 365.835ZM74.5121 381.94C74.6842 381.819 75.2003 382.508 75.7337 383.334C74.925 382.576 74.4089 382.009 74.4949 381.94H74.5121ZM76.5597 384.641C77.2996 385.897 77.6953 386.689 76.5597 384.641V384.641ZM80.672 387.979H80.7752C80.7752 388.1 80.9645 388.22 81.0333 388.341C80.9192 388.208 80.7925 388.087 80.6548 387.979H80.672ZM800.796 382.989C793.088 390.319 781.473 393.726 769.996 395.43C641.292 414.529 510.713 424.199 380.597 419.932C287.476 416.749 195.336 406.407 103.144 393.382C94.1102 392.109 84.3197 390.457 78.1082 383.798C66.4078 371.237 72.1548 345.944 75.2003 330.768C77.9878 316.865 83.3218 298.334 99.8572 296.355C125.667 293.327 155.64 304.218 181.175 308.09C211.917 312.781 242.774 316.538 273.745 319.36C405.925 331.405 540.325 329.529 671.92 311.91C695.906 308.686 719.805 304.941 743.619 300.674C764.835 296.871 788.356 289.731 801.175 311.703C809.967 326.673 811.137 346.701 809.778 363.615C809.359 370.984 806.139 377.915 800.779 382.989H800.796Z" fill="#0D0C22" />
        </g>
    ),
    viewBox: "0 0 884 1279",
});

export const KofiIcon = createIcon({
    displayName: "KofiIcon",
    path: (
        <g>
            <g fill="none" transform="scale(1.9656)">
                <circle cx="16.28" cy="16.28" fill="#29abe0" r="16.28" />
                <path d="M22.258 8.8h1.608c3.1 0 5.614 2.514 5.614 5.614v.33c0 3.101-2.514 5.615-5.614 5.615h-1.608v1.69a2.591 2.591 0 01-2.591 2.591H7.43a2.591 2.591 0 01-2.591-2.591V10.096c0-.716.58-1.296 1.296-1.296zm0 2.997v5.565h1.466a2.783 2.783 0 100-5.565z" fill="#fff" />
            </g>
            <path d="M25.946 27.67c.787-2.303 2.651-3.454 5.594-3.454 4.414 0 6.05 5.491 3.736 9.081-1.542 2.394-4.652 5.42-9.33 9.081-4.678-3.66-7.788-6.687-9.33-9.08-2.314-3.59-.678-9.082 3.736-9.082 2.942 0 4.807 1.151 5.594 3.453z" fill="#ff5e5b" />
        </g>
    ),
    viewBox: "0 0 64 64",
});

export const PrintIcon = createIcon({
    displayName: "CreateIcon",
    path: <g fill="currentColor"><path d="M458.959 217.124c-10.759-10.758-23.654-16.134-38.69-16.134h-18.268v-73.089c0-7.611-1.91-15.99-5.719-25.122-3.806-9.136-8.371-16.368-13.699-21.698L339.18 37.683c-5.328-5.325-12.56-9.895-21.692-13.704-9.138-3.805-17.508-5.708-25.126-5.708H100.5c-7.614 0-14.087 2.663-19.417 7.993-5.327 5.327-7.994 11.799-7.994 19.414V200.99H54.818c-15.037 0-27.932 5.379-38.688 16.134C5.376 227.876 0 240.772 0 255.81v118.773c0 2.478.905 4.609 2.712 6.426 1.809 1.804 3.951 2.707 6.423 2.707h63.954v45.68c0 7.617 2.664 14.089 7.994 19.417 5.33 5.325 11.803 7.994 19.417 7.994h274.083c7.611 0 14.093-2.669 19.418-7.994 5.328-5.332 7.994-11.8 7.994-19.417v-45.68h63.953c2.471 0 4.613-.903 6.42-2.707 1.807-1.816 2.71-3.948 2.71-6.426V255.81c.004-15.038-5.37-27.934-16.119-38.686zm-93.51 203.138H109.636v-73.087h255.813v73.087zm0-182.725H109.636V54.816h182.726v45.679c0 7.614 2.669 14.083 7.991 19.414 5.328 5.33 11.799 7.993 19.417 7.993h45.679v109.635zm67.667 31.119c-3.614 3.614-7.898 5.428-12.847 5.428s-9.233-1.813-12.848-5.428c-3.613-3.61-5.42-7.898-5.42-12.847s1.807-9.232 5.42-12.847c3.614-3.617 7.898-5.426 12.848-5.426 4.948 0 9.232 1.809 12.847 5.426 3.613 3.614 5.427 7.898 5.427 12.847s-1.81 9.237-5.427 12.847z"/></g>,
    viewBox: "0 0 475 475",
});

export const PiggyLogoIcon = createIcon({
    displayName: "PiggyLogoIcon",
    path: <g>
        <path d="m363.265625 150.015625c-12.175781 35.683594-50.976563 54.738281-86.65625 42.5625-27.214844-9.289063-45.691406-34.632813-46.210937-63.382813-10.660157 1.011719-21.257813 2.605469-31.742188 4.777344-11.046875-24.394531-35.339844-40.078125-62.121094-40.105468v61.953124c-33.332031 16.15625-60.867187 42.199219-78.847656 74.582032h-40.621094c-4.710937 0-8.53125 3.820312-8.53125 8.53125v102.402344c0 4.710937 3.820313 8.53125 8.53125 8.53125h40.621094c16.300781 29.496093 40.699219 53.714843 70.3125 69.804687v66.730469c0 4.710937 3.820312 8.53125 8.535156 8.53125h51.199219c4.710937 0 8.53125-3.820313 8.53125-8.53125v-40.707032c19.617187 4.347657 39.644531 6.550782 59.734375 6.574219 38.253906.246094 76.105469-7.816406 110.933594-23.640625v57.773438c0 4.710937 3.820312 8.53125 8.535156 8.53125h51.199219c4.710937 0 8.53125-3.820313 8.53125-8.53125v-108.375c21.585937-24.234375 33.707031-55.441406 34.132812-87.894532 0-59.816406-42.664062-112.042968-106.066406-140.117187zm0 0" fill="#ffb655" />
        <path d="m298.667969 59.734375c-37.703125 0-68.269531 30.5625-68.269531 68.265625v1.195312c.679687 37.695313 31.789062 67.707032 69.484374 67.027344 28.75-.515625 54.09375-18.992187 63.382813-46.207031 2.4375-7.082031 3.679687-14.523437 3.667969-22.015625 0-37.703125-30.5625-68.265625-68.265625-68.265625zm0 0" fill="#ffde55" />
        <g fill="#3e3d42"><path d="m128 221.867188c-9.425781 0-17.066406-7.640626-17.066406-17.066407h-17.066406c0 18.851563 15.28125 34.132813 34.132812 34.132813s34.132812-15.28125 34.132812-34.132813h-17.066406c0 9.425781-7.640625 17.066407-17.066406 17.066407zm0 0"/>
        <path d="m503.464844 341.332031v-25.597656c0-14.140625-11.460938-25.601563-25.597656-25.601563 0-58.878906-39.878907-113.699218-104.449219-144.714843 9.660156-41.277344-15.96875-82.570313-57.246094-92.230469s-82.570313 15.96875-92.230469 57.246094c-.855468 3.648437-1.441406 7.355468-1.75 11.089844-6.28125.75-12.582031 1.636718-18.859375 2.796874-13.652343-24.046874-39.148437-38.929687-66.800781-38.988281-4.710938 0-8.53125 3.820313-8.53125 8.535157v56.796874c-31.324219 16.175782-57.453125 40.855469-75.394531 71.203126h-35.539063c-9.425781 0-17.066406 7.640624-17.066406 17.066406v102.398437c0 9.425781 7.640625 17.070313 17.066406 17.070313h35.542969c16.234375 27.421875 39.261719 50.203125 66.855469 66.148437v61.851563c0 9.425781 7.644531 17.066406 17.070312 17.066406h51.199219c9.425781 0 17.066406-7.640625 17.066406-17.066406v-30.277344c51.550781 9.535156 104.742188 4.511719 153.597657-14.507812v44.785156c0 9.425781 7.640624 17.066406 17.070312 17.066406h51.199219c9.425781 0 17.066406-7.640625 17.066406-17.066406v-105.277344c17.726563-21.039062 29.128906-46.671875 32.894531-73.925781h1.238282c4.710937 0 8.535156 3.820312 8.535156 8.535156v25.601563c0 9.425781 7.640625 17.066406 17.066406 17.066406h8.53125v-17.066406h-8.535156zm-264.53125-213.332031c0-32.988281 26.742187-59.734375 59.734375-59.734375 32.988281 0 59.730469 26.746094 59.730469 59.734375.011718 6.558594-1.078126 13.074219-3.214844 19.277344-8.222656 24.203125-30.957032 40.472656-56.515625 40.457031-1.996094 0-3.988281-.101563-5.976563-.308594-30.046875-3.183593-53.0625-28.183593-53.757812-58.394531zm189.773437 244.488281c-1.316406 1.546875-2.039062 3.507813-2.039062 5.539063v108.375h-51.199219v-57.773438c0-4.710937-3.820312-8.53125-8.535156-8.53125-1.242188.003906-2.464844.273438-3.59375.792969-51.863282 23.152344-109.820313 28.933594-165.238282 16.476563-4.601562-1.011719-9.15625 1.898437-10.167968 6.5-.132813.601562-.199219 1.214843-.199219 1.828124v40.707032h-51.203125v-66.730469c.007812-3.054687-1.621094-5.882813-4.265625-7.410156-28.199219-15.273438-51.441406-38.289063-66.996094-66.335938-1.472656-2.828125-4.398437-4.597656-7.585937-4.589843h-40.617188v-102.402344h40.621094c3.175781-.003906 6.089844-1.773438 7.558594-4.589844 17.117187-30.859375 43.386718-55.644531 75.1875-70.9375 2.84375-1.460938 4.632812-4.390625 4.632812-7.585938v-52.804687c20.136719 2.984375 37.386719 15.96875 45.824219 34.492187 1.648437 3.625 5.585937 5.632813 9.488281 4.828126 7.382813-1.527344 14.832032-2.773438 22.230469-3.703126.160156 1.167969.433594 2.304688.648437 3.457032.1875.980468.34375 1.980468.5625 2.945312.359376 1.550782.855469 3.070313 1.265626 4.589844.238281.785156.417968 1.585938.671874 2.355469.75 2.253906 1.605469 4.46875 2.558594 6.628906.214844.476563.480469.929687.699219 1.410156.777344 1.707031 1.582031 3.34375 2.476563 4.957031.433593.777344.929687 1.507813 1.390624 2.277344.761719 1.253906 1.511719 2.558594 2.339844 3.738282.554688.808593 1.160156 1.578124 1.707032 2.363281.851562 1.109375 1.628906 2.21875 2.507812 3.277343.640625.785157 1.332031 1.527344 2.003906 2.285157.898438 1 1.792969 1.988281 2.730469 2.945312.726563.734375 1.484375 1.433594 2.238281 2.140625.972656.90625 1.945313 1.785156 2.953125 2.636719.425781.359375.851563.742187 1.261719 1.09375h-28.757812v17.066406h153.601562v-17.066406h-28.578125c.40625-.332031.851563-.632813 1.234375-.972656l.113281-.09375c2.511719-2.140625 4.882813-4.4375 7.097657-6.878907.207031-.230468.417968-.433593.625-.664062 2.121093-2.390625 4.089843-4.910156 5.886718-7.554688.273438-.390624.554688-.773437.855469-1.175781 1.734375-2.636719 3.304687-5.375 4.699219-8.199219.121094-.230468.273437-.4375.394531-.667968 57.582031 28.261718 93.003906 76.910156 93.003906 128.605468-.453125 30.417969-11.847656 59.652344-32.09375 82.355469zm0 0"/><path d="m392.535156 25.601562h17.066406v17.066407h-17.066406zm0 0"/><path d="m409.601562 42.667969h17.066407v17.066406h-17.066407zm0 0"/><path d="m375.46875 42.667969h17.066406v17.066406h-17.066406zm0 0"/><path d="m392.535156 59.734375h17.066406v17.066406h-17.066406zm0 0"/><path d="m469.332031 93.867188h17.070313v17.066406h-17.070313zm0 0"/><path d="m486.402344 110.933594h17.066406v17.066406h-17.066406zm0 0"/><path d="m452.265625 110.933594h17.066406v17.066406h-17.066406zm0 0"/><path d="m469.332031 128h17.070313v17.066406h-17.070313zm0 0"/><path d="m196.265625 0h17.066406v17.066406h-17.066406zm0 0"/><path d="m213.332031 17.066406h17.066407v17.066406h-17.066407zm0 0"/><path d="m179.199219 17.066406h17.066406v17.066406h-17.066406zm0 0"/><path d="m196.265625 34.132812h17.066406v17.066407h-17.066406zm0 0"/></g></g>,
    viewBox: "0 -4 512.00074 512",
});
