"use client"

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React from 'react'

export default function BooksSvg({
    className,
}: {
    className?: string;
})  {

    const { theme } = useTheme()

    if (theme === "dark") {
        return (
            <svg 
                width="100%"
                viewBox="0 0 1920 356" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                    "",
                    className
                )}
            >
                <path d="M961.748 122.264C435.879 122.264 7.48545 36.7169 -51 0V349H1949.5L1959 10.2202C1859.52 70.7842 1473.03 122.264 961.748 122.264Z" fill="hsl(var(--lightGrass))"/>
                <path d="M1751.14 242.156L1959.67 242.156L1959.67 237.026L1751.14 237.026L1751.14 242.156Z" fill="#2A9D58"/>
                <path d="M1751.14 292.829L1959.67 292.829L1959.67 287.7L1751.14 287.7L1751.14 292.829Z" fill="#2A9D58"/>
                <path d="M1588.25 292.977H1775.53V237.282H1588.25C1585.32 237.282 1583.12 239.481 1583.12 242.412V287.481C1583.12 290.412 1585.32 292.977 1588.25 292.977Z" fill="#2A9D58"/>
                <path d="M1768.2 287.847H1942.64L1941.91 281.985C1940.44 270.626 1940.44 259.634 1941.91 248.275L1942.64 242.412H1768.2C1761.97 242.412 1757.2 247.176 1757.2 253.405V276.855C1757.2 282.718 1762.33 287.847 1768.2 287.847Z" fill="#E5DDD4"/>
                <path d="M1711.16 283.981L1745.24 283.981L1745.24 246.24L1711.16 246.24L1711.16 283.981Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1672.78 283.981L1706.86 283.981L1706.86 246.24L1672.78 246.24L1672.78 283.981Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1595.6 283.981L1629.68 283.981L1629.68 246.24L1595.6 246.24L1595.6 283.981Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1711.39 253.038L1728.25 259.267L1745.47 253.038L1728.25 246.443L1711.39 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1711.39 261.099L1728.25 267.328L1745.47 261.099L1728.25 254.504L1711.39 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1711.39 269.16L1728.25 275.389L1745.47 269.16L1728.25 262.565L1711.39 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1711.39 277.221L1728.25 283.817L1745.47 277.221L1728.25 270.992L1711.39 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1672.54 253.038L1689.77 259.267L1706.63 253.038L1689.77 246.443L1672.54 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1672.54 261.099L1689.77 267.328L1706.63 261.099L1689.77 254.504L1672.54 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1672.54 269.16L1689.77 275.389L1706.63 269.16L1689.77 262.565L1672.54 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1672.54 277.221L1689.77 283.817L1706.63 277.221L1689.77 270.992L1672.54 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1633.92 283.981L1668 283.981L1668 246.24L1633.92 246.24L1633.92 283.981Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1634.06 253.038L1651.29 259.267L1668.15 253.038L1651.29 246.443L1634.06 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1634.06 261.099L1651.29 267.328L1668.15 261.099L1651.29 254.504L1634.06 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1634.06 269.16L1651.29 275.389L1668.15 269.16L1651.29 262.565L1634.06 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1634.06 277.221L1651.29 283.817L1668.15 277.221L1651.29 270.992L1634.06 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1595.58 253.038L1612.81 259.267L1629.67 253.038L1612.81 246.443L1595.58 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1595.58 261.099L1612.81 267.328L1629.67 261.099L1612.81 254.504L1595.58 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1595.58 269.16L1612.81 275.389L1629.67 269.16L1612.81 262.565L1595.58 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1595.58 277.221L1612.81 283.817L1629.67 277.221L1612.81 270.992L1595.58 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1757.2 254.504H1941.17L1941.54 250.84H1757.57L1757.2 252.672V254.504Z" fill="#D4C8BB"/>
                <path d="M1940.81 263.298H1757.2V266.962H1940.81V263.298Z" fill="#D4C8BB"/>
                <path d="M1757.2 278.321H1941.54L1941.17 274.656H1757.2V278.321Z" fill="#D4C8BB"/>
                <path opacity="0.25" d="M1757.2 260C1757.2 260 1756.83 281.252 1862.38 287.847H1775.89H1767.83C1767.83 287.847 1757.57 287.847 1757.57 275.389L1757.2 260Z" fill="#535B50"/>
                <path opacity="0.4" d="M1757.2 274.656C1757.2 276.489 1757.2 272.458 1757.2 274.29C1756.47 287.481 1767.46 287.847 1767.46 287.847H1774.06H1959.86V292.977H1588.25C1583.12 292.611 1583.12 287.847 1583.12 287.847V274.656H1757.2Z" fill="#086608"/>
                <path opacity="0.2" d="M1583 274.336L1757.08 274.336L1757.08 260.046L1583 260.046L1583 274.336Z" fill="#086608"/>
                <path opacity="0.29" d="M1634.43 253.038H1679.87C1680.97 253.038 1681.71 252.305 1681.71 251.206V248.641C1681.71 247.542 1680.97 246.809 1679.87 246.809H1634.43C1633.33 246.809 1632.6 247.542 1632.6 248.641V251.206C1632.97 252.305 1633.7 253.038 1634.43 253.038Z" fill="#6BFFA0"/>
                <path d="M1422.65 292.977H1214.12V298.107H1422.65V292.977Z" fill="#2A9D58"/>
                <path d="M1422.65 343.542H1214.12V348.672H1422.65V343.542Z" fill="#2A9D58"/>
                <path d="M1585.37 348.672H1398.09V292.977H1585.37C1588.3 292.977 1590.5 295.175 1590.5 298.107V343.176C1590.5 346.107 1588.3 348.672 1585.37 348.672Z" fill="#2A9D58"/>
                <path d="M1405.42 343.542H1230.98L1231.71 337.679C1233.18 326.321 1233.18 315.328 1231.71 303.969L1230.98 298.107H1405.42C1411.65 298.107 1416.42 302.87 1416.42 309.099V332.55C1416.42 338.412 1411.29 343.542 1405.42 343.542Z" fill="#E5DDD4"/>
                <path d="M1416.42 310.198H1232.45L1232.08 306.534H1416.05L1416.42 308.366V310.198Z" fill="#D4C8BB"/>
                <path d="M1416.42 318.992H1232.81V322.656H1416.42V318.992Z" fill="#D4C8BB"/>
                <path d="M1416.05 334.015H1232.08L1232.45 330.351H1416.42L1416.05 334.015Z" fill="#D4C8BB"/>
                <path d="M1430.98 302.633V338.908H1489.25V302.633H1430.98Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1487.88 320.824L1459.66 339.145L1431.08 320.824L1459.66 302.504L1487.88 320.824Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1431.08 302.504L1459.66 321.557L1489.35 302.504" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1431.08 339.145L1459.66 321.557L1489.35 339.145" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1459.66 322.656C1460.47 322.656 1461.13 322.164 1461.13 321.557C1461.13 320.95 1460.47 320.458 1459.66 320.458C1458.85 320.458 1458.2 320.95 1458.2 321.557C1458.2 322.164 1458.85 322.656 1459.66 322.656Z" fill="#E5DDD4"/>
                <path d="M1449.04 322.29C1449.44 322.29 1449.77 321.962 1449.77 321.557C1449.77 321.152 1449.44 320.824 1449.04 320.824C1448.63 320.824 1448.3 321.152 1448.3 321.557C1448.3 321.962 1448.63 322.29 1449.04 322.29Z" fill="#E5DDD4"/>
                <path d="M1470.29 322.29C1470.7 322.29 1471.02 321.962 1471.02 321.557C1471.02 321.152 1470.7 320.824 1470.29 320.824C1469.89 320.824 1469.56 321.152 1469.56 321.557C1469.56 321.962 1469.89 322.29 1470.29 322.29Z" fill="#E5DDD4"/>
                <path d="M1459.66 314.229C1460.07 314.229 1460.4 313.901 1460.4 313.496C1460.4 313.091 1460.07 312.763 1459.66 312.763C1459.26 312.763 1458.93 313.091 1458.93 313.496C1458.93 313.901 1459.26 314.229 1459.66 314.229Z" fill="#E5DDD4"/>
                <path d="M1459.66 329.985C1460.07 329.985 1460.4 329.657 1460.4 329.252C1460.4 328.847 1460.07 328.519 1459.66 328.519C1459.26 328.519 1458.93 328.847 1458.93 329.252C1458.93 329.657 1459.26 329.985 1459.66 329.985Z" fill="#E5DDD4"/>
                <path d="M1459.66 314.962V321.557" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1459.66 321.557V327.786" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1451.23 321.557H1458.93" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1460.76 321.557H1468.46" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1515.31 302.675V338.95H1573.59V302.675H1515.31Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1572.17 320.824L1543.95 339.145L1515.37 320.824L1543.95 302.504L1572.17 320.824Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1515.37 302.504L1543.95 321.557L1573.64 302.504" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1515.37 339.145L1543.95 321.557L1573.64 339.145" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1543.95 322.656C1544.76 322.656 1545.42 322.164 1545.42 321.557C1545.42 320.95 1544.76 320.458 1543.95 320.458C1543.14 320.458 1542.49 320.95 1542.49 321.557C1542.49 322.164 1543.14 322.656 1543.95 322.656Z" fill="#E5DDD4"/>
                <path d="M1533.69 322.29C1534.1 322.29 1534.42 321.962 1534.42 321.557C1534.42 321.152 1534.1 320.824 1533.69 320.824C1533.29 320.824 1532.96 321.152 1532.96 321.557C1532.96 321.962 1533.29 322.29 1533.69 322.29Z" fill="#E5DDD4"/>
                <path d="M1554.95 322.29C1555.35 322.29 1555.68 321.962 1555.68 321.557C1555.68 321.152 1555.35 320.824 1554.95 320.824C1554.54 320.824 1554.21 321.152 1554.21 321.557C1554.21 321.962 1554.54 322.29 1554.95 322.29Z" fill="#E5DDD4"/>
                <path d="M1543.95 314.229C1544.36 314.229 1544.69 313.901 1544.69 313.496C1544.69 313.091 1544.36 312.763 1543.95 312.763C1543.55 312.763 1543.22 313.091 1543.22 313.496C1543.22 313.901 1543.55 314.229 1543.95 314.229Z" fill="#E5DDD4"/>
                <path d="M1543.95 329.985C1544.36 329.985 1544.69 329.657 1544.69 329.252C1544.69 328.847 1544.36 328.519 1543.95 328.519C1543.55 328.519 1543.22 328.847 1543.22 329.252C1543.22 329.657 1543.55 329.985 1543.95 329.985Z" fill="#E5DDD4"/>
                <path d="M1543.95 314.962V321.557" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1543.95 321.557V327.786" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1535.52 321.557H1543.22" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1545.05 321.557H1552.75" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.25" d="M1416.42 315.695C1416.42 315.695 1416.79 336.946 1311.24 343.542H1397.73H1405.79C1405.79 343.542 1416.05 343.542 1416.05 331.084L1416.42 315.695Z" fill="#535B50"/>
                <path opacity="0.4" d="M1416.42 330.351C1416.42 332.183 1416.42 328.153 1416.42 329.985C1417.15 343.175 1406.16 343.542 1406.16 343.542H1399.56H1213.76V348.672H1585C1590.13 348.305 1590.13 343.542 1590.13 343.542V330.351H1416.42Z" fill="#086608"/>
                <path opacity="0.2" d="M1590.5 315.695H1416.42V329.985H1590.5V315.695Z" fill="#086608"/>
                <path opacity="0.29" d="M1543.59 305.435H1498.14C1497.04 305.435 1496.31 304.702 1496.31 303.603V301.038C1496.31 299.939 1497.04 299.206 1498.14 299.206H1543.59C1544.69 299.206 1545.42 299.939 1545.42 301.038V303.603C1545.05 304.702 1544.32 305.435 1543.59 305.435Z" fill="#6BFFA0"/>
                <path d="M1103.81 292.977H895.287V298.107H1103.81V292.977Z" fill="#2A9D58"/>
                <path d="M1103.81 343.542H895.287V348.672H1103.81V343.542Z" fill="#2A9D58"/>
                <path d="M1266.53 348.672H1079.26V292.977H1266.53C1269.46 292.977 1271.66 295.175 1271.66 298.107V343.176C1272.03 346.107 1269.46 348.672 1266.53 348.672Z" fill="#2A9D58"/>
                <path d="M1086.59 343.542H912.146L912.878 337.679C914.344 326.321 914.344 315.328 912.878 303.969L912.146 298.107H1086.59C1092.82 298.107 1097.58 302.87 1097.58 309.099V332.55C1097.58 338.412 1092.82 343.542 1086.59 343.542Z" fill="#E5DDD4"/>
                <path d="M1097.58 310.198H913.978L913.611 306.534H1097.58V308.366V310.198Z" fill="#D4C8BB"/>
                <path d="M1097.95 318.992H914.344V322.656H1097.95V318.992Z" fill="#D4C8BB"/>
                <path d="M1097.58 334.015H913.611L913.978 330.351H1097.58V334.015Z" fill="#D4C8BB"/>
                <path d="M1140.46 320.824L1116.27 328.153L1106.01 320.824L1116.27 313.496L1140.46 320.824Z" fill="#1A553E"/>
                <path d="M1140.46 320.092L1116.64 312.03L1112.61 300.305H1125.07L1140.46 320.092Z" fill="#1A553E"/>
                <path d="M1140.46 321.557L1116.64 329.618L1112.61 341.343H1125.07L1140.46 321.557Z" fill="#1A553E"/>
                <path d="M1175.64 300.305H1149.62V341.343H1175.64V300.305Z" fill="#1A553E"/>
                <path d="M1226.22 300.305H1215.96V341.343H1226.22V300.305Z" fill="#1A553E"/>
                <path d="M1256.63 300.305H1255.9V341.343H1256.63V300.305Z" fill="#1A553E"/>
                <path d="M1078.16 320.092H1074.86H1071.56H1068.26V355.267L1073.4 348.305L1078.16 355.267V320.092Z" fill="#DB3E20"/>
                <path opacity="0.25" d="M1078.16 343.542H1079.63H1087.69C1087.69 343.542 1097.95 343.542 1097.95 331.084V315.695C1097.95 315.695 1097.95 322.656 1078.16 329.985" fill="#535B50"/>
                <path opacity="0.25" d="M1068.26 332.916C1052.87 337.313 1029.05 341.343 992.404 343.542H1068.26" fill="#535B50"/>
                <path opacity="0.4" d="M1078.16 348.672H1266.9C1272.03 348.305 1272.03 343.542 1272.03 343.542V330.351H1097.95C1097.95 332.183 1097.95 328.153 1097.95 329.985C1098.68 343.175 1087.69 343.542 1087.69 343.542H1081.09H1078.16" fill="#086608"/>
                <path opacity="0.4" d="M1068.26 343.542H895.287V348.672H1068.26" fill="#086608"/>
                <path opacity="0.2" d="M1271.66 315.695H1097.58V329.985H1271.66V315.695Z" fill="#086608"/>
                <path opacity="0.29" d="M1246.74 303.969H1201.3C1200.2 303.969 1199.46 303.237 1199.46 302.137V299.572C1199.46 298.473 1200.2 297.74 1201.3 297.74H1246.74C1247.84 297.74 1248.57 298.473 1248.57 299.572V302.137C1248.57 303.237 1247.47 303.969 1246.74 303.969Z" fill="#6BFFA0"/>
                <path d="M1450.44 242.119L1658.96 242.119L1658.96 236.989L1450.44 236.989L1450.44 242.119Z" fill="#DB3E20"/>
                <path d="M1450.44 292.793L1658.96 292.793L1658.96 287.663L1450.44 287.663L1450.44 292.793Z" fill="#DB3E20"/>
                <path d="M1287.42 292.977H1474.69V237.282H1287.42C1284.49 237.282 1282.29 239.481 1282.29 242.412V287.481C1282.29 290.412 1284.49 292.977 1287.42 292.977Z" fill="#DB3E20"/>
                <path d="M1467.36 287.847H1641.8L1641.07 281.985C1639.6 270.626 1639.6 259.634 1641.07 248.275L1641.8 242.412H1467.36C1461.13 242.412 1456.36 247.176 1456.36 253.405V276.855C1456.36 282.718 1461.5 287.847 1467.36 287.847Z" fill="#E5DDD4"/>
                <path d="M1456.36 254.504H1640.34L1640.7 250.84H1456.73L1456.36 252.672V254.504Z" fill="#D4C8BB"/>
                <path d="M1639.97 263.298H1456.36V266.962H1639.97V263.298Z" fill="#D4C8BB"/>
                <path d="M1456.73 278.321H1640.7L1640.34 274.656H1456.36L1456.73 278.321Z" fill="#D4C8BB"/>
                <path d="M1383.39 246.892L1383.39 283.167L1441.66 283.167L1441.66 246.892L1383.39 246.892Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1384.9 265.13L1413.12 283.084L1441.71 265.13L1413.12 246.809L1384.9 265.13Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1441.71 246.809L1413.12 265.863L1383.44 246.809" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1441.71 283.084L1413.12 265.496L1383.44 283.084" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1413.12 266.595C1413.93 266.595 1414.59 266.103 1414.59 265.496C1414.59 264.889 1413.93 264.397 1413.12 264.397C1412.31 264.397 1411.65 264.889 1411.65 265.496C1411.65 266.103 1412.31 266.595 1413.12 266.595Z" fill="#E5DDD4"/>
                <path d="M1423.75 266.229C1424.15 266.229 1424.48 265.901 1424.48 265.496C1424.48 265.091 1424.15 264.763 1423.75 264.763C1423.34 264.763 1423.02 265.091 1423.02 265.496C1423.02 265.901 1423.34 266.229 1423.75 266.229Z" fill="#E5DDD4"/>
                <path d="M1402.49 266.229C1402.9 266.229 1403.23 265.901 1403.23 265.496C1403.23 265.091 1402.9 264.763 1402.49 264.763C1402.09 264.763 1401.76 265.091 1401.76 265.496C1401.76 265.901 1402.09 266.229 1402.49 266.229Z" fill="#E5DDD4"/>
                <path d="M1413.12 258.534C1413.53 258.534 1413.85 258.206 1413.85 257.802C1413.85 257.397 1413.53 257.069 1413.12 257.069C1412.72 257.069 1412.39 257.397 1412.39 257.802C1412.39 258.206 1412.72 258.534 1413.12 258.534Z" fill="#E5DDD4"/>
                <path d="M1413.12 274.29C1413.53 274.29 1413.85 273.962 1413.85 273.557C1413.85 273.153 1413.53 272.824 1413.12 272.824C1412.72 272.824 1412.39 273.153 1412.39 273.557C1412.39 273.962 1412.72 274.29 1413.12 274.29Z" fill="#E5DDD4"/>
                <path d="M1413.12 259.267V265.496" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1413.12 265.496V272.092" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1421.55 265.496H1414.22" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1412.02 265.496H1404.32" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1299.06 246.849L1299.06 283.124L1357.33 283.124L1357.33 246.849L1299.06 246.849Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1300.61 265.13L1328.83 283.084L1357.42 265.13L1328.83 246.809L1300.61 265.13Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1357.42 246.809L1328.83 265.863L1299.15 246.809" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1357.42 283.084L1328.83 265.496L1299.15 283.084" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1328.83 266.595C1329.64 266.595 1330.3 266.103 1330.3 265.496C1330.3 264.889 1329.64 264.397 1328.83 264.397C1328.02 264.397 1327.36 264.889 1327.36 265.496C1327.36 266.103 1328.02 266.595 1328.83 266.595Z" fill="#E5DDD4"/>
                <path d="M1339.46 266.229C1339.86 266.229 1340.19 265.901 1340.19 265.496C1340.19 265.091 1339.86 264.763 1339.46 264.763C1339.05 264.763 1338.73 265.091 1338.73 265.496C1338.73 265.901 1339.05 266.229 1339.46 266.229Z" fill="#E5DDD4"/>
                <path d="M1318.2 266.229C1318.61 266.229 1318.94 265.901 1318.94 265.496C1318.94 265.091 1318.61 264.763 1318.2 264.763C1317.8 264.763 1317.47 265.091 1317.47 265.496C1317.47 265.901 1317.8 266.229 1318.2 266.229Z" fill="#E5DDD4"/>
                <path d="M1328.83 258.534C1329.23 258.534 1329.56 258.206 1329.56 257.802C1329.56 257.397 1329.23 257.069 1328.83 257.069C1328.43 257.069 1328.1 257.397 1328.1 257.802C1328.1 258.206 1328.43 258.534 1328.83 258.534Z" fill="#E5DDD4"/>
                <path d="M1328.83 274.29C1329.23 274.29 1329.56 273.962 1329.56 273.557C1329.56 273.153 1329.23 272.824 1328.83 272.824C1328.43 272.824 1328.1 273.153 1328.1 273.557C1328.1 273.962 1328.43 274.29 1328.83 274.29Z" fill="#E5DDD4"/>
                <path d="M1328.83 259.267V265.496" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1328.83 265.496V272.092" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1337.26 265.496H1329.56" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1327.73 265.496H1320.04" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.25" d="M1456.36 260C1456.36 260 1456 281.252 1561.54 287.847H1475.06H1466.99C1466.99 287.847 1456.73 287.847 1456.73 275.389L1456.36 260Z" fill="#5F524A"/>
                <path opacity="0.4" d="M1456.36 274.656C1456.36 276.489 1456.36 272.458 1456.36 274.29C1455.63 287.481 1466.63 287.847 1466.63 287.847H1473.22H1659.03V292.977H1287.42C1282.29 292.611 1282.29 287.847 1282.29 287.847V274.656H1456.36Z" fill="#630C00"/>
                <path opacity="0.3" d="M1282.41 274.299L1456.48 274.299L1456.48 260.009L1282.41 260.009L1282.41 274.299Z" fill="#75170D"/>
                <path opacity="0.5" d="M1307.57 249.74H1353.02C1354.12 249.74 1354.85 249.008 1354.85 247.908V245.344C1354.85 244.244 1354.12 243.511 1353.02 243.511H1307.57C1306.48 243.511 1305.74 244.244 1305.74 245.344V247.908C1305.74 249.008 1306.48 249.74 1307.57 249.74Z" fill="#ECA49B"/>
                <path d="M203.428 298.672L411.954 298.672L411.954 293.542L203.428 293.542L203.428 298.672Z" fill="#DB3E20"/>
                <path d="M203.428 349.346L411.954 349.346L411.954 344.216L203.428 344.216L203.428 349.346Z" fill="#DB3E20"/>
                <path d="M40.659 349.405H227.929V293.71H40.659C37.7272 293.71 35.5283 295.908 35.5283 298.84V343.908C35.5283 346.84 37.7272 349.405 40.659 349.405Z" fill="#DB3E20"/>
                <path d="M220.6 344.275H395.044L394.311 338.412C392.845 327.053 392.845 316.061 394.311 304.702L395.044 298.84H220.6C214.37 298.84 209.605 303.603 209.605 309.832V333.282C209.605 339.145 214.37 344.275 220.6 344.275Z" fill="#E5DDD4"/>
                <path d="M209.605 310.931H393.578L393.944 307.267H209.972L209.605 309.099V310.931Z" fill="#D4C8BB"/>
                <path d="M393.211 319.725H209.605V323.389H393.211V319.725Z" fill="#D4C8BB"/>
                <path d="M209.605 334.748H393.944L393.578 331.084H209.605V334.748Z" fill="#D4C8BB"/>
                <path d="M76.9554 349.291L144.754 349.291L144.754 293.597L76.9554 293.597L76.9554 349.291Z" fill="#B44A3B"/>
                <path d="M52.5587 349.291L65.752 349.291L65.752 293.597L52.5587 293.597L52.5587 349.291Z" fill="#B44A3B"/>
                <path d="M176.838 349.291L190.031 349.291L190.031 293.597L176.838 293.597L176.838 349.291Z" fill="#B44A3B"/>
                <path d="M170.783 349.291L172.249 349.291L172.249 293.597L170.783 293.597L170.783 349.291Z" fill="#B44A3B"/>
                <path opacity="0.25" d="M209.605 316.427C209.605 316.427 209.239 337.679 314.785 344.275H227.929H219.867C219.867 344.275 209.605 344.275 209.605 331.817V316.427Z" fill="#5F524A"/>
                <path opacity="0.4" d="M209.606 331.084C209.606 332.916 209.606 328.885 209.606 330.718C208.873 343.908 219.867 344.275 219.867 344.275H226.464H412.268V349.405H40.659C35.5283 349.038 35.5283 344.275 35.5283 344.275V331.084H209.606Z" fill="#630C00"/>
                <path opacity="0.3" d="M35.3945 330.936L209.472 330.936L209.472 316.645L35.3945 316.645L35.3945 330.936Z" fill="#75170D"/>
                <path opacity="0.5" d="M60.8148 306.168H106.258C107.358 306.168 108.091 305.435 108.091 304.336V301.771C108.091 300.672 107.358 299.939 106.258 299.939H60.8148C59.7154 299.939 58.9824 300.672 58.9824 301.771V304.336C58.9824 305.435 59.7154 306.168 60.8148 306.168Z" fill="#ECA49B"/>
                <path d="M1057.91 242.146L1266.44 242.146L1266.44 237.016L1057.91 237.016L1057.91 242.146Z" fill="#DB3E20"/>
                <path d="M1057.91 292.82L1266.44 292.82L1266.44 287.69L1057.91 287.69L1057.91 292.82Z" fill="#DB3E20"/>
                <path d="M894.92 292.977H1082.19V237.282H894.92C891.988 237.282 889.789 239.481 889.789 242.412V287.481C889.789 290.412 891.988 292.977 894.92 292.977Z" fill="#DB3E20"/>
                <path d="M1074.86 287.847H1249.3L1248.57 281.985C1247.11 270.626 1247.11 259.634 1248.57 248.275L1249.3 242.412H1074.86C1068.63 242.412 1063.87 247.176 1063.87 253.405V276.855C1063.87 282.718 1069 287.847 1074.86 287.847Z" fill="#E5DDD4"/>
                <path d="M1017.93 283.971L1052.01 283.971L1052.01 246.231L1017.93 246.231L1017.93 283.971Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M979.176 283.971L1013.26 283.971L1013.26 246.231L979.176 246.231L979.176 283.971Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M940.69 283.971L974.772 283.971L974.772 246.231L940.69 246.231L940.69 283.971Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M902.366 283.971L936.448 283.971L936.448 246.231L902.366 246.231L902.366 283.971Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1018.06 253.038L1034.91 259.267L1052.14 253.038L1034.91 246.443L1018.06 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1018.06 261.099L1034.91 267.328L1052.14 261.099L1034.91 254.504L1018.06 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1018.06 269.16L1034.91 275.389L1052.14 269.16L1034.91 262.565L1018.06 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1018.06 277.221L1034.91 283.45L1052.14 277.221L1034.91 270.992L1018.06 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M979.21 253.038L996.434 259.267L1013.29 253.038L996.434 246.443L979.21 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M979.21 261.099L996.434 267.328L1013.29 261.099L996.434 254.504L979.21 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M979.21 269.16L996.434 275.389L1013.29 269.16L996.434 262.565L979.21 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M979.21 277.221L996.434 283.45L1013.29 277.221L996.434 270.992L979.21 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M940.729 253.038L957.954 259.267L974.812 253.038L957.954 246.443L940.729 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M940.729 261.099L957.954 267.328L974.812 261.099L957.954 254.504L940.729 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M940.729 269.16L957.954 275.389L974.812 269.16L957.954 262.565L940.729 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M940.729 277.221L957.954 283.45L974.812 277.221L957.954 270.992L940.729 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M902.249 253.038L919.473 259.267L936.331 253.038L919.473 246.443L902.249 253.038Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M902.249 261.099L919.473 267.328L936.331 261.099L919.473 254.504L902.249 261.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M902.249 269.16L919.473 275.389L936.331 269.16L919.473 262.565L902.249 269.16Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M902.249 277.221L919.473 283.45L936.331 277.221L919.473 270.992L902.249 277.221Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1063.87 254.504H1247.84L1248.2 250.84H1064.23L1063.87 252.672V254.504Z" fill="#D4C8BB"/>
                <path d="M1247.47 263.298H1063.87V266.962H1247.47V263.298Z" fill="#D4C8BB"/>
                <path d="M1064.23 278.321H1248.2L1247.84 274.656H1063.87L1064.23 278.321Z" fill="#D4C8BB"/>
                <path opacity="0.25" d="M1063.87 260C1063.87 260 1063.5 281.252 1169.05 287.847H1082.56H1074.13C1074.13 287.847 1063.87 287.847 1063.87 275.389V260Z" fill="#5F524A"/>
                <path opacity="0.4" d="M1063.87 274.656C1063.87 276.489 1063.87 272.458 1063.87 274.29C1063.13 287.481 1074.13 287.847 1074.13 287.847H1080.72H1266.53V292.977H894.92C889.789 292.611 889.789 287.847 889.789 287.847V274.656H1063.87Z" fill="#630C00"/>
                <path opacity="0.3" d="M889.877 274.41L1063.95 274.41L1063.95 260.119L889.877 260.119L889.877 274.41Z" fill="#75170D"/>
                <path opacity="0.5" d="M915.077 249.374H960.52C961.619 249.374 962.352 248.641 962.352 247.542V244.977C962.352 243.878 961.619 243.145 960.52 243.145H915.077C913.977 243.145 913.244 243.878 913.244 244.977V247.542C913.244 248.641 913.977 249.374 915.077 249.374Z" fill="#ECA49B"/>
                <path d="M430.959 126.26H222.433V131.389H430.959V126.26Z" fill="#DB3E20"/>
                <path d="M430.959 176.824H222.433V181.954H430.959V176.824Z" fill="#DB3E20"/>
                <path d="M593.675 181.954H406.404V126.26H593.675C596.607 126.26 598.805 128.458 598.805 131.389V176.458C598.805 179.756 596.607 181.954 593.675 181.954Z" fill="#DB3E20"/>
                <path d="M413.735 176.824H239.291L240.024 170.962C241.49 159.603 241.49 148.611 240.024 137.252L239.291 131.389H413.735C419.965 131.389 424.729 136.153 424.729 142.382V165.832C424.729 172.061 419.598 176.824 413.735 176.824Z" fill="#E5DDD4"/>
                <path d="M470.539 135.42H436.456V173.16H470.539V135.42Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M509.385 135.42H475.303V173.16H509.385V135.42Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M547.866 135.42H513.783V173.16H547.866V135.42Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M586.345 135.42H552.263V173.16H586.345V135.42Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M470.539 142.015L453.681 148.244L436.456 142.015L453.681 135.42L470.539 142.015Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M470.539 150.076L453.681 156.305L436.456 150.076L453.681 143.481L470.539 150.076Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M470.539 158.137L453.681 164.733L436.456 158.137L453.681 151.908L470.539 158.137Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M470.539 166.565L453.681 172.794L436.456 166.565L453.681 159.969L470.539 166.565Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M509.385 142.015L492.161 148.244L475.303 142.015L492.161 135.42L509.385 142.015Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M509.385 150.076L492.161 156.305L475.303 150.076L492.161 143.481L509.385 150.076Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M509.385 158.137L492.161 164.733L475.303 158.137L492.161 151.908L509.385 158.137Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M509.385 166.565L492.161 172.794L475.303 166.565L492.161 159.969L509.385 166.565Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M547.866 142.015L530.641 148.244L513.783 142.015L530.641 135.42L547.866 142.015Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M547.866 150.076L530.641 156.305L513.783 150.076L530.641 143.481L547.866 150.076Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M547.866 158.137L530.641 164.733L513.783 158.137L530.641 151.908L547.866 158.137Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M547.866 166.565L530.641 172.794L513.783 166.565L530.641 159.969L547.866 166.565Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M586.345 142.015L569.487 148.244L552.263 142.015L569.487 135.42L586.345 142.015Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M586.345 150.076L569.487 156.305L552.263 150.076L569.487 143.481L586.345 150.076Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M586.345 158.137L569.487 164.733L552.263 158.137L569.487 151.908L586.345 158.137Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M586.345 166.565L569.487 172.794L552.263 166.565L569.487 159.969L586.345 166.565Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M424.728 143.847H240.756L240.39 140.183H424.362L424.728 142.015V143.847Z" fill="#D4C8BB"/>
                <path d="M424.729 152.275H241.123V155.939H424.729V152.275Z" fill="#D4C8BB"/>
                <path d="M424.728 167.298H240.39L240.756 163.634H424.728V167.298Z" fill="#D4C8BB"/>
                <path opacity="0.25" d="M424.729 148.977C424.729 148.977 425.096 170.229 319.55 176.824H406.039H414.101C414.101 176.824 424.363 176.824 424.363 164.366L424.729 148.977Z" fill="#5F524A"/>
                <path opacity="0.4" d="M424.729 163.634C424.729 165.466 424.729 161.435 424.729 163.267C425.462 176.458 414.467 176.824 414.467 176.824H407.871H222.433V181.954H593.675C598.806 181.588 598.806 176.824 598.806 176.824V163.634H424.729Z" fill="#630C00"/>
                <path opacity="0.3" d="M598.806 148.977H424.729V163.267H598.806V148.977Z" fill="#75170D"/>
                <path opacity="0.5" d="M573.519 138.351H528.076C526.976 138.351 526.243 137.618 526.243 136.519V133.954C526.243 132.855 526.976 132.122 528.076 132.122H573.519C574.618 132.122 575.351 132.855 575.351 133.954V136.885C575.351 137.618 574.618 138.351 573.519 138.351Z" fill="#ECA49B"/>
                <path d="M670.636 293.344H462.109V298.473H670.636V293.344Z" fill="#DB3E20"/>
                <path d="M670.636 343.908H462.109V349.038H670.636V343.908Z" fill="#DB3E20"/>
                <path d="M833.352 349.038H646.081V293.344H833.352C836.283 293.344 838.482 295.542 838.482 298.473V343.542C838.482 346.84 836.283 349.038 833.352 349.038Z" fill="#DB3E20"/>
                <path d="M653.411 343.908H478.968L479.701 338.046C481.167 326.687 481.167 315.695 479.701 304.336L478.968 298.473H653.411C659.642 298.473 664.406 303.237 664.406 309.466V332.916C664.406 339.145 659.642 343.908 653.411 343.908Z" fill="#E5DDD4"/>
                <path d="M664.405 310.931H480.433L480.066 307.267H664.039L664.405 309.099V310.931Z" fill="#D4C8BB"/>
                <path d="M664.405 319.359H480.8V323.023H664.405V319.359Z" fill="#D4C8BB"/>
                <path d="M664.406 334.382H480.434V330.718H664.406V334.382Z" fill="#D4C8BB"/>
                <path d="M760.057 304.336H743.932L735.869 321.191L743.932 338.046H760.057L767.753 321.191L760.057 304.336Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M768.852 304.336H735.136V338.046H768.852V304.336Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M754.926 314.595H748.696L745.764 321.191L748.696 327.786H754.926L758.224 321.191L754.926 314.595Z" fill="#E5DDD4"/>
                <path d="M699.954 304.336H683.829L675.767 321.191L683.829 338.046H699.954L707.65 321.191L699.954 304.336Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M708.749 304.336H675.033V338.046H708.749V304.336Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M694.823 314.595H688.593L685.661 321.191L688.593 327.786H694.823L698.121 321.191L694.823 314.595Z" fill="#E5DDD4"/>
                <path d="M819.427 304.336H803.668L795.605 321.191L803.668 338.046H819.427L827.489 321.191L819.427 304.336Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M828.588 304.336H794.872V338.046H828.588V304.336Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M814.662 314.595H808.432L805.5 321.191L808.432 327.786H814.662L817.96 321.191L814.662 314.595Z" fill="#E5DDD4"/>
                <path d="M723.775 304.702H720.11V338.412H723.775V304.702Z" fill="#E5DDD4"/>
                <path d="M783.878 304.702H780.213V338.412H783.878V304.702Z" fill="#E5DDD4"/>
                <path opacity="0.25" d="M664.406 316.427C664.406 316.427 664.772 337.679 559.227 344.275H645.715H653.778C653.778 344.275 664.039 344.275 664.039 331.817L664.406 316.427Z" fill="#5F524A"/>
                <path opacity="0.4" d="M664.405 330.718C664.405 332.55 664.405 328.519 664.405 330.351C665.138 343.542 654.144 343.908 654.144 343.908H647.547H462.109V349.038H833.352C838.483 348.672 838.483 343.908 838.483 343.908V330.718H664.405Z" fill="#630C00"/>
                <path opacity="0.3" d="M838.482 316.427H664.405V330.718H838.482V316.427Z" fill="#75170D"/>
                <path opacity="0.5" d="M810.264 307.634H764.821C763.721 307.634 762.988 306.901 762.988 305.802V303.237C762.988 302.137 763.721 301.405 764.821 301.405H810.264C811.363 301.405 812.096 302.137 812.096 303.237V305.802C812.096 306.901 811.363 307.634 810.264 307.634Z" fill="#ECA49B"/>
                <path d="M665.425 243.856L873.951 243.856L873.951 238.726L665.425 238.726L665.425 243.856Z" fill="#DB3E20"/>
                <path d="M665.425 294.53L873.951 294.53L873.951 289.4L665.425 289.4L665.425 294.53Z" fill="#DB3E20"/>
                <path d="M502.422 294.443H689.692V238.748H502.422C499.49 238.748 497.291 240.947 497.291 243.878V288.947C497.291 292.244 499.49 294.443 502.422 294.443Z" fill="#DB3E20"/>
                <path d="M682.363 289.313H856.806L856.073 283.45C854.607 272.092 854.607 261.099 856.073 249.74L856.806 243.878H682.363C676.132 243.878 671.368 248.641 671.368 254.87V278.321C671.368 284.55 676.499 289.313 682.363 289.313Z" fill="#E5DDD4"/>
                <path d="M671.368 256.336H855.34L855.707 252.672H671.735L671.368 254.504V256.336Z" fill="#D4C8BB"/>
                <path d="M854.974 264.763H671.368V268.427H854.974V264.763Z" fill="#D4C8BB"/>
                <path d="M671.735 279.786H855.707L855.34 276.122H671.368L671.735 279.786Z" fill="#D4C8BB"/>
                <path d="M628.856 266.595L653.044 273.924L662.939 266.595L653.044 259.634L628.856 266.595Z" fill="#913024"/>
                <path d="M628.856 265.863L652.678 257.802L656.709 246.076H644.249L628.856 265.863Z" fill="#913024"/>
                <path d="M628.856 267.328L652.678 275.389L656.709 287.114H644.249L628.856 267.328Z" fill="#913024"/>
                <path d="M593.632 287.147L619.652 287.147L619.652 246.109L593.632 246.109L593.632 287.147Z" fill="#913024"/>
                <path d="M543.32 287.147L553.581 287.147L553.581 246.109L543.32 246.109L543.32 287.147Z" fill="#913024"/>
                <path d="M691.158 265.863H694.456H697.755H700.687V301.405L695.922 294.443L691.158 301.405V265.863Z" fill="#2A9D58"/>
                <path opacity="0.25" d="M691.158 289.313H689.692H681.63C681.63 289.313 671.368 289.313 671.368 276.855V261.466C671.368 261.466 671.368 268.427 691.158 275.756" fill="#5F524A"/>
                <path opacity="0.25" d="M700.687 278.687C716.079 283.084 739.9 287.114 776.548 289.313H700.687" fill="#5F524A"/>
                <path opacity="0.4" d="M700.687 289.313H873.664V294.443H700.687" fill="#630C00"/>
                <path opacity="0.4" d="M691.158 294.443H502.422C497.291 294.076 497.291 289.313 497.291 289.313V276.122H671.368C671.368 277.954 671.368 273.924 671.368 275.756C670.635 288.947 681.63 289.313 681.63 289.313H688.226H691.158" fill="#630C00"/>
                <path opacity="0.3" d="M497.393 276.12L671.47 276.12L671.47 261.829L497.393 261.829L497.393 276.12Z" fill="#75170D"/>
                <path opacity="0.5" d="M525.51 249.74H570.953C572.053 249.74 572.786 249.008 572.786 247.908V245.344C572.786 244.244 572.053 243.511 570.953 243.511H525.51C524.411 243.511 523.678 244.244 523.678 245.344V247.908C524.044 249.008 524.777 249.74 525.51 249.74Z" fill="#ECA49B"/>
                <path d="M1774.98 298.303L1983.51 298.303L1983.51 293.173L1774.98 293.173L1774.98 298.303Z" fill="#DB3E20"/>
                <path d="M1774.98 348.977L1983.51 348.977L1983.51 343.847L1774.98 343.847L1774.98 348.977Z" fill="#DB3E20"/>
                <path d="M1612.08 349.038H1799.35V293.343H1612.08C1609.14 293.343 1606.95 295.542 1606.95 298.473V343.542C1606.95 346.473 1609.14 349.038 1612.08 349.038Z" fill="#DB3E20"/>
                <path d="M1792.02 343.908H1966.46L1965.73 338.046C1964.26 326.687 1964.26 315.695 1965.73 304.336L1966.46 298.473H1792.02C1785.79 298.473 1781.02 303.237 1781.02 309.466V332.916C1781.02 338.779 1786.15 343.908 1792.02 343.908Z" fill="#E5DDD4"/>
                <path d="M1781.02 310.565H1964.99L1965.36 306.901H1781.39L1781.02 308.733V310.565Z" fill="#D4C8BB"/>
                <path d="M1964.63 319.359H1781.02V323.023H1964.63V319.359Z" fill="#D4C8BB"/>
                <path d="M1781.02 334.382H1965.36L1964.99 330.718H1781.02V334.382Z" fill="#D4C8BB"/>
                <path d="M1738.51 321.191L1762.7 328.519L1772.59 321.191L1762.7 313.863L1738.51 321.191Z" fill="#913024"/>
                <path d="M1738.51 320.458L1762.33 312.397L1766.36 300.672H1753.9L1738.51 320.458Z" fill="#913024"/>
                <path d="M1738.51 321.924L1762.33 329.985L1766.36 341.71H1753.9L1738.51 321.924Z" fill="#913024"/>
                <path d="M1703.19 341.594L1729.21 341.594L1729.21 300.556L1703.19 300.556L1703.19 341.594Z" fill="#913024"/>
                <path d="M1652.88 341.594L1663.14 341.594L1663.14 300.556L1652.88 300.556L1652.88 341.594Z" fill="#913024"/>
                <path d="M1800.81 320.458H1804.11H1807.04H1810.34V356L1805.58 348.672L1800.81 356V320.458Z" fill="#2A9D58"/>
                <path opacity="0.25" d="M1800.81 343.908H1799.35H1791.28C1791.28 343.908 1781.02 343.908 1781.02 331.45V316.061C1781.02 316.061 1781.02 323.023 1800.81 330.351" fill="#5F524A"/>
                <path opacity="0.25" d="M1810.34 333.282C1825.73 337.679 1849.55 341.71 1886.2 343.908H1810.34" fill="#5F524A"/>
                <path opacity="0.4" d="M1810.34 343.908H1983.32V349.038H1810.34" fill="#630C00"/>
                <path opacity="0.4" d="M1800.81 349.038H1612.08C1606.95 348.672 1606.95 343.908 1606.95 343.908V330.718H1781.02C1781.02 332.55 1781.02 328.519 1781.02 330.351C1780.29 343.542 1791.28 343.908 1791.28 343.908H1797.88H1800.81" fill="#630C00"/>
                <path opacity="0.3" d="M1606.95 330.567L1781.03 330.567L1781.03 316.277L1606.95 316.277L1606.95 330.567Z" fill="#75170D"/>
                <path opacity="0.5" d="M1635.16 304.336H1680.61C1681.71 304.336 1682.44 303.603 1682.44 302.504V299.939C1682.44 298.84 1681.71 298.107 1680.61 298.107H1635.16C1634.06 298.107 1633.33 298.84 1633.33 299.939V302.504C1633.33 303.603 1634.43 304.336 1635.16 304.336Z" fill="#ECA49B"/>
                <path d="M695.189 182.321H486.663V187.45H695.189V182.321Z" fill="#2A9D58"/>
                <path d="M695.189 232.885H486.663V238.015H695.189V232.885Z" fill="#2A9D58"/>
                <path d="M858.272 238.015H671.002V182.321H858.272C861.204 182.321 863.403 184.519 863.403 187.45V232.519C863.403 235.45 861.204 238.015 858.272 238.015Z" fill="#2A9D58"/>
                <path d="M678.331 232.885H503.888L504.621 227.023C506.087 215.664 506.087 204.672 504.621 193.313L503.888 187.45H678.331C684.562 187.45 689.326 192.214 689.326 198.443V221.893C689.326 227.756 684.195 232.885 678.331 232.885Z" fill="#E5DDD4"/>
                <path d="M689.326 199.542H505.354L504.987 195.878H688.959L689.326 197.71V199.542Z" fill="#D4C8BB"/>
                <path d="M689.325 208.336H505.72V212H689.325V208.336Z" fill="#D4C8BB"/>
                <path d="M688.959 223.359H504.987L505.354 219.695H689.326L688.959 223.359Z" fill="#D4C8BB"/>
                <path d="M820.892 182.321H753.826V238.015H820.892V182.321Z" fill="#1D743C"/>
                <path d="M845.445 182.321H832.252V238.015H845.445V182.321Z" fill="#1D743C"/>
                <path d="M720.843 182.321H707.649V238.015H720.843V182.321Z" fill="#1D743C"/>
                <path d="M726.707 182.321H725.607V238.015H726.707V182.321Z" fill="#1D743C"/>
                <path opacity="0.25" d="M689.326 205.038C689.326 205.038 689.692 226.29 584.146 232.885H670.635H678.698C678.698 232.885 688.959 232.886 688.959 220.428L689.326 205.038Z" fill="#535B50"/>
                <path opacity="0.4" d="M689.326 219.695C689.326 221.527 689.326 217.496 689.326 219.328C690.059 232.519 679.064 232.885 679.064 232.885H672.468H486.663V238.015H857.906C863.036 237.649 863.036 232.885 863.036 232.885V219.695H689.326Z" fill="#086608"/>
                <path opacity="0.2" d="M863.402 205.038H689.325V219.328H863.402V205.038Z" fill="#086608"/>
                <path opacity="0.29" d="M816.127 194.779H770.684C769.585 194.779 768.852 194.046 768.852 192.947V190.382C768.852 189.282 769.585 188.55 770.684 188.55H816.127C817.227 188.55 817.96 189.282 817.96 190.382V192.947C817.96 194.046 817.227 194.779 816.127 194.779Z" fill="#6BFFA0"/>
                <path d="M177.526 238.015H-31V243.145H177.526V238.015Z" fill="#2A9D58"/>
                <path d="M177.526 288.58H-31V293.71H177.526V288.58Z" fill="#2A9D58"/>
                <path d="M340.242 293.71H152.972V238.015H340.242C343.174 238.015 345.373 240.214 345.373 243.145V288.214C345.739 291.145 343.174 293.71 340.242 293.71Z" fill="#2A9D58"/>
                <path d="M160.302 288.58H-14.1416L-13.4086 282.718C-11.9427 271.359 -11.9427 260.366 -13.4086 249.008L-14.1416 243.145H160.302C166.532 243.145 171.296 247.908 171.296 254.137V277.588C171.296 283.45 166.532 288.58 160.302 288.58Z" fill="#E5DDD4"/>
                <path d="M217.472 246.809H183.39V284.55H217.472V246.809Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M255.953 246.809H221.87V284.55H255.953V246.809Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M332.913 246.809H298.83V284.55H332.913V246.809Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M217.472 253.771L200.248 260L183.39 253.771L200.248 247.176L217.472 253.771Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M217.472 261.832L200.248 268.061L183.39 261.832L200.248 255.237L217.472 261.832Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M217.472 269.893L200.248 276.122L183.39 269.893L200.248 263.298L217.472 269.893Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M217.472 277.954L200.248 284.55L183.39 277.954L200.248 271.725L217.472 277.954Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M255.953 253.771L239.095 260L221.87 253.771L239.095 247.176L255.953 253.771Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M255.953 261.832L239.095 268.061L221.87 261.832L239.095 255.237L255.953 261.832Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M255.953 269.893L239.095 276.122L221.87 269.893L239.095 263.298L255.953 269.893Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M255.953 277.954L239.095 284.55L221.87 277.954L239.095 271.725L255.953 277.954Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M294.799 246.809H260.717V284.55H294.799V246.809Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M294.433 253.771L277.575 260L260.351 253.771L277.575 247.176L294.433 253.771Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M294.433 261.832L277.575 268.061L260.351 261.832L277.575 255.237L294.433 261.832Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M294.433 269.893L277.575 276.122L260.351 269.893L277.575 263.298L294.433 269.893Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M294.433 277.954L277.575 284.55L260.351 277.954L277.575 271.725L294.433 277.954Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M332.913 253.771L316.055 260L298.83 253.771L316.055 247.176L332.913 253.771Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M332.913 261.832L316.055 268.061L298.83 261.832L316.055 255.237L332.913 261.832Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M332.913 269.893L316.055 276.122L298.83 269.893L316.055 263.298L332.913 269.893Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M332.913 277.954L316.055 284.55L298.83 277.954L316.055 271.725L332.913 277.954Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M171.296 255.237H-12.6765L-13.043 251.573H170.929L171.296 253.405V255.237Z" fill="#D4C8BB"/>
                <path d="M171.296 264.031H-12.3096V267.695H171.296V264.031Z" fill="#D4C8BB"/>
                <path d="M171.296 279.053H-12.6758V275.389H171.296V279.053Z" fill="#D4C8BB"/>
                <path opacity="0.25" d="M171.296 260.733C171.296 260.733 171.663 281.985 66.1172 288.58H152.606H161.035C161.035 288.58 171.296 288.58 171.296 276.122V260.733Z" fill="#535B50"/>
                <path opacity="0.4" d="M171.296 275.389C171.296 277.221 171.296 273.191 171.296 275.023C172.029 288.214 161.035 288.58 161.035 288.58H154.438H-31V293.71H340.243C345.373 293.343 345.373 288.58 345.373 288.58V275.389H171.296Z" fill="#086608"/>
                <path opacity="0.2" d="M345.373 260.733H171.296V275.023H345.373V260.733Z" fill="#086608"/>
                <path opacity="0.29" d="M294.067 253.771H248.623C247.524 253.771 246.791 253.038 246.791 251.939V249.374C246.791 248.275 247.524 247.542 248.623 247.542H294.067C295.166 247.542 295.899 248.275 295.899 249.374V251.939C295.899 253.038 295.166 253.771 294.067 253.771Z" fill="#6BFFA0"/>
                <path d="M1340.89 186.243L1549.42 186.243L1549.42 181.113L1340.89 181.113L1340.89 186.243Z" fill="#2A9D58"/>
                <path d="M1340.89 236.551L1549.42 236.551L1549.42 231.421L1340.89 231.421L1340.89 236.551Z" fill="#2A9D58"/>
                <path d="M1178.21 236.55H1365.48V180.855H1178.21C1175.28 180.855 1173.08 183.053 1173.08 185.985V231.053C1173.08 234.351 1175.28 236.55 1178.21 236.55Z" fill="#2A9D58"/>
                <path d="M1358.15 231.786H1532.59L1531.86 225.924C1530.39 214.565 1530.39 203.573 1531.86 192.214L1532.59 186.351H1358.15C1351.92 186.351 1347.15 191.115 1347.15 197.344V220.794C1347.15 226.657 1351.92 231.786 1358.15 231.786Z" fill="#E5DDD4"/>
                <path d="M1347.15 198.443H1531.13L1531.49 194.779H1347.52L1347.15 196.611V198.443Z" fill="#D4C8BB"/>
                <path d="M1530.76 206.87H1347.15V210.534H1530.76V206.87Z" fill="#D4C8BB"/>
                <path d="M1347.15 221.893H1531.49L1531.13 218.229H1347.15V221.893Z" fill="#D4C8BB"/>
                <path d="M1251.5 192.214H1267.63L1275.69 208.702L1267.63 225.557H1251.5L1243.81 208.702L1251.5 192.214Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1242.8 225.508L1276.51 225.508L1276.51 191.798L1242.8 191.798L1242.8 225.508Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1256.63 202.107H1262.86L1265.8 208.702L1262.86 215.298H1256.63L1253.34 208.702L1256.63 202.107Z" fill="#E5DDD4"/>
                <path d="M1311.61 192.214H1327.73L1335.79 208.702L1327.73 225.557H1311.61L1303.91 208.702L1311.61 192.214Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1302.95 225.508L1336.67 225.508L1336.67 191.798L1302.95 191.798L1302.95 225.508Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1316.74 202.107H1322.97L1325.9 208.702L1322.97 215.298H1316.74L1313.44 208.702L1316.74 202.107Z" fill="#E5DDD4"/>
                <path d="M1192.13 192.214H1207.89L1215.95 208.702L1207.89 225.557H1192.13L1184.07 208.702L1192.13 192.214Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1183.24 225.508L1216.96 225.508L1216.96 191.798L1183.24 191.798L1183.24 225.508Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M1196.9 202.107H1203.13L1206.06 208.702L1203.13 215.298H1196.9L1193.6 208.702L1196.9 202.107Z" fill="#E5DDD4"/>
                <path d="M1287.9 225.644L1291.56 225.644L1291.56 191.935L1287.9 191.935L1287.9 225.644Z" fill="#E5DDD4"/>
                <path d="M1227.68 225.644L1231.35 225.644L1231.35 191.935L1227.68 191.935L1227.68 225.644Z" fill="#E5DDD4"/>
                <path opacity="0.25" d="M1347.15 203.939C1347.15 203.939 1346.79 225.191 1452.33 231.786H1365.84H1357.78C1357.78 231.786 1347.52 231.786 1347.52 219.328L1347.15 203.939Z" fill="#535B50"/>
                <path opacity="0.4" d="M1347.15 218.229C1347.15 220.061 1347.15 216.031 1347.15 217.863C1346.42 231.053 1357.42 231.42 1357.42 231.42H1364.01H1549.82V236.55H1178.21C1173.08 236.183 1173.08 231.42 1173.08 231.42V218.229H1347.15Z" fill="#086608"/>
                <path opacity="0.2" d="M1172.86 218.057L1346.93 218.057L1346.93 203.767L1172.86 203.767L1172.86 218.057Z" fill="#086608"/>
                <path opacity="0.29" d="M1198 195.145H1243.44C1244.54 195.145 1245.27 194.412 1245.27 193.313V190.748C1245.27 189.649 1244.54 188.916 1243.44 188.916H1198C1196.9 188.916 1196.17 189.649 1196.17 190.748V193.313C1196.53 194.412 1197.26 195.145 1198 195.145Z" fill="#6BFFA0"/>
                <path d="M435.689 75.7133L644.215 75.7133L644.215 70.5835L435.689 70.5835L435.689 75.7133Z" fill="#2A9D58"/>
                <path d="M435.689 126.387L644.215 126.387L644.215 121.257L435.689 121.257L435.689 126.387Z" fill="#2A9D58"/>
                <path d="M272.64 126.26H459.911V70.5649H272.64C269.709 70.5649 267.51 72.7634 267.51 75.6946V120.763C267.51 124.061 269.709 126.26 272.64 126.26Z" fill="#2A9D58"/>
                <path d="M452.581 121.13H627.025L626.292 115.267C624.826 103.908 624.826 92.916 626.292 81.5572L627.025 75.6946H452.581C446.351 75.6946 441.587 80.458 441.587 86.687V110.137C441.587 116.366 446.718 121.13 452.581 121.13Z" fill="#E5DDD4"/>
                <path d="M441.587 88.1527H625.559L625.926 84.4886H441.953L441.587 86.3206V88.1527Z" fill="#D4C8BB"/>
                <path d="M625.193 96.5801H441.587V100.244H625.193V96.5801Z" fill="#D4C8BB"/>
                <path d="M441.953 111.603H625.926L625.559 107.939H441.587L441.953 111.603Z" fill="#D4C8BB"/>
                <path d="M346.303 81.5573H362.061L370.124 98.4122L362.061 115.267H346.303L338.24 98.4122L346.303 81.5573Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M337.227 115.345L370.943 115.345L370.943 81.6349L337.227 81.6349L337.227 115.345Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M351.068 91.8168H357.298L360.596 98.4122L357.298 105.008H351.068L348.136 98.4122L351.068 91.8168Z" fill="#E5DDD4"/>
                <path d="M406.404 81.5573H422.163L430.225 98.4122L422.163 115.267H406.404L398.342 98.4122L406.404 81.5573Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M397.383 115.345L431.099 115.345L431.099 81.6349L397.383 81.6349L397.383 115.345Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M411.169 91.8168H417.399L420.698 98.4122L417.399 105.008H411.169L408.237 98.4122L411.169 91.8168Z" fill="#E5DDD4"/>
                <path d="M286.566 81.5573H302.691L310.388 98.4122L302.691 115.267H286.566L278.504 98.4122L286.566 81.5573Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M277.676 115.345L311.392 115.345L311.392 81.6349L277.676 81.6349L277.676 115.345Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M291.331 91.8168H297.561L300.86 98.4122L297.561 105.008H291.331L288.399 98.4122L291.331 91.8168Z" fill="#E5DDD4"/>
                <path d="M382.33 115.481L385.995 115.481L385.995 81.7713L382.33 81.7713L382.33 115.481Z" fill="#E5DDD4"/>
                <path d="M322.114 115.481L325.778 115.481L325.778 81.7713L322.114 81.7713L322.114 115.481Z" fill="#E5DDD4"/>
                <path opacity="0.25" d="M441.587 93.2824C441.587 93.2824 441.22 114.534 546.766 121.13H460.277H452.215C452.215 121.13 441.953 121.13 441.953 108.672L441.587 93.2824Z" fill="#535B50"/>
                <path opacity="0.4" d="M441.587 107.939C441.587 109.771 441.587 105.74 441.587 107.573C440.854 120.763 451.848 121.13 451.848 121.13H458.445H644.249V126.26H272.64C267.51 125.893 267.51 121.13 267.51 121.13V107.939H441.587Z" fill="#086608"/>
                <path opacity="0.2" d="M267.655 107.893L441.732 107.893L441.732 93.6034L267.655 93.6034L267.655 107.893Z" fill="#086608"/>
                <path opacity="0.29" d="M292.797 84.4885H338.241C339.34 84.4885 340.073 83.7557 340.073 82.6565V80.0916C340.073 78.9923 339.34 78.2595 338.241 78.2595H292.797C291.698 78.2595 290.965 78.9923 290.965 80.0916V82.6565C290.965 83.7557 291.698 84.4885 292.797 84.4885Z" fill="#6BFFA0"/>
                <path d="M1060 237.081L1079.96 137.944L1055.17 132.956L1035.21 232.093L1060 237.081Z" fill="#DB3E20"/>
                <path d="M1062.4 161.435L1061.3 150.809L1065.33 147.145L1067.53 151.908L1062.4 161.435Z" fill="#913024"/>
                <path d="M1062.77 161.435L1068.26 152.275L1073.39 151.542L1072.3 156.672L1062.77 161.435Z" fill="#913024"/>
                <path d="M1062.03 161.435L1060.57 150.809L1056.17 147.878L1055.07 153.008L1062.03 161.435Z" fill="#913024"/>
                <path d="M1069.98 167.689L1052.74 164.218L1050.28 176.431L1067.52 179.901L1069.98 167.689Z" fill="#913024"/>
                <path d="M1060.25 215.613L1043 212.143L1041.78 218.249L1059.02 221.719L1060.25 215.613Z" fill="#913024"/>
                <path opacity="0.3" d="M1051.77 169.13L1055.07 153.374C1055.07 153.008 1055.8 152.641 1056.17 152.641C1056.54 152.641 1056.9 153.374 1056.9 153.74L1053.61 169.496C1053.61 169.863 1052.87 170.229 1052.51 170.229C1052.14 170.229 1051.77 169.863 1051.77 169.13Z" fill="#ECA49B"/>
                <path opacity="0.4" d="M1079.95 137.969L1072.04 136.379L1052.08 235.516L1059.99 237.107L1079.95 137.969Z" fill="#630C00"/>
                <path opacity="0.3" d="M1071.94 136.106L1064.03 134.516L1044.08 233.653L1051.98 235.244L1071.94 136.106Z" fill="#75170D"/>
                <path d="M92.3574 182.159L92.3574 47.1658L59.0001 47.1658L59.0001 182.159H92.3574Z" fill="#DB3E20"/>
                <path d="M75.587 82.5842L71.457 68.9261L75.587 63.2087L79.3993 68.9261L75.587 82.5842Z" fill="#913024"/>
                <path d="M75.9053 82.5842L80.6706 68.9261L87.0244 66.7026V73.6905L75.9053 82.5842Z" fill="#913024"/>
                <path d="M74.9521 82.5842L70.5045 68.9261L63.833 66.7026V73.6905L74.9521 82.5842Z" fill="#913024"/>
                <path d="M87.342 88.6192H63.833V105.136H87.342V88.6192Z" fill="#913024"/>
                <path d="M87.342 154.051H63.833V162.31H87.342V154.051Z" fill="#913024"/>
                <path opacity="0.3" d="M63.833 95.6072V74.0082C63.833 73.3729 64.4684 72.7377 65.1038 72.7377C65.7392 72.7377 66.3745 73.3729 66.3745 74.0082V95.6072C66.3745 96.2424 65.7392 96.8777 65.1038 96.8777C64.4684 96.8777 63.833 96.2424 63.833 95.6072Z" fill="#ECA49B"/>
                <path opacity="0.4" d="M92.4245 47.3271H81.623V182.321H92.4245V47.3271Z" fill="#630C00"/>
                <path opacity="0.3" d="M81.6227 47.3271H70.8213V182.321H81.6227V47.3271Z" fill="#75170D"/>
                <path d="M1899.32 237.188V126.629H1872V237.188H1899.32Z" fill="#DB3E20"/>
                <path d="M1885.59 155.637L1882.2 144.45L1885.59 139.768L1888.71 144.45L1885.59 155.637Z" fill="#913024"/>
                <path d="M1885.85 155.637L1889.75 144.45L1894.95 142.629V148.353L1885.85 155.637Z" fill="#913024"/>
                <path d="M1885.07 155.637L1881.42 144.45L1875.96 142.629V148.353L1885.07 155.637Z" fill="#913024"/>
                <path d="M1895.21 160.579H1875.96V174.106H1895.21V160.579Z" fill="#913024"/>
                <path d="M1895.21 214.168H1875.96V220.932H1895.21V214.168Z" fill="#913024"/>
                <path opacity="0.3" d="M1875.96 166.302V148.613C1875.96 148.092 1876.48 147.572 1877 147.572C1877.52 147.572 1878.04 148.092 1878.04 148.613V166.302C1878.04 166.823 1877.52 167.343 1877 167.343C1876.48 167.343 1875.96 166.823 1875.96 166.302Z" fill="#ECA49B"/>
                <path opacity="0.4" d="M1899.38 126.761H1890.53V237.321H1899.38V126.761Z" fill="#630C00"/>
                <path opacity="0.3" d="M1890.53 126.761H1881.68V237.321H1890.53V126.761Z" fill="#75170D"/>
                <path d="M1714.53 237.296V81.5704H1676.05V237.296H1714.53Z" fill="#DB3E20"/>
                <path d="M1695.31 122.229L1690.54 106.473L1695.31 99.8779L1700.07 106.473L1695.31 122.229Z" fill="#913024"/>
                <path d="M1695.67 122.229L1701.17 106.473L1708.87 103.908V111.969L1695.67 122.229Z" fill="#913024"/>
                <path d="M1694.94 122.229L1689.45 106.473L1681.75 103.908V111.969L1694.94 122.229Z" fill="#913024"/>
                <path d="M1708.87 129.191H1681.75V148.244H1708.87V129.191Z" fill="#913024"/>
                <path d="M1708.87 204.672H1681.75V214.198H1708.87V204.672Z" fill="#913024"/>
                <path opacity="0.3" d="M1681.75 137.252V112.336C1681.75 111.603 1682.48 110.87 1683.22 110.87C1683.95 110.87 1684.68 111.603 1684.68 112.336V137.252C1684.68 137.985 1683.95 138.718 1683.22 138.718C1682.48 138.718 1681.75 137.985 1681.75 137.252Z" fill="#ECA49B"/>
                <path opacity="0.4" d="M1714.73 81.5573H1702.27V237.282H1714.73V81.5573Z" fill="#630C00"/>
                <path opacity="0.3" d="M1702.27 81.5573H1689.81V237.282H1702.27V81.5573Z" fill="#75170D"/>
                <path d="M1118.69 237.217V81.4917H1080.21V237.217H1118.69Z" fill="#2A9D58"/>
                <path d="M1099.42 122.229L1094.65 106.473L1099.42 99.8778L1104.18 106.473L1099.42 122.229Z" fill="#1A553E"/>
                <path d="M1100.15 122.229L1105.28 106.473L1112.97 103.908V111.969L1100.15 122.229Z" fill="#1A553E"/>
                <path d="M1099.05 122.229L1093.92 106.473L1086.22 103.908V111.969L1099.05 122.229Z" fill="#1A553E"/>
                <path d="M1113.34 129.191H1086.22V148.244H1113.34V129.191Z" fill="#1A553E"/>
                <path d="M1113.34 204.672H1086.22V214.198H1113.34V204.672Z" fill="#1A553E"/>
                <path opacity="0.29" d="M1086.22 137.252V112.336C1086.22 111.603 1086.95 110.87 1087.69 110.87C1088.42 110.87 1089.15 111.603 1089.15 112.336V137.252C1089.15 137.985 1088.42 138.718 1087.69 138.718C1086.59 138.718 1086.22 137.985 1086.22 137.252Z" fill="#6BFFA0"/>
                <path opacity="0.4" d="M1118.84 81.5573H1106.38V237.282H1118.84V81.5573Z" fill="#086608"/>
                <path opacity="0.2" d="M1106.74 81.5573H1094.28V237.282H1106.74V81.5573Z" fill="#086608"/>
                <path d="M124.597 182.214L124.597 11.6454L92.1924 11.6454L92.1924 182.214H124.597Z" fill="#2A9D58"/>
                <path opacity="0.4" d="M124.512 149.922H92.1074V162.31H124.512V149.922Z" fill="#086608"/>
                <path opacity="0.4" d="M124.512 38.7511H92.1074V51.1387H124.512V38.7511Z" fill="#086608"/>
                <path opacity="0.29" d="M96.2373 49.5506V28.2692C96.2373 27.634 96.8727 26.9987 97.508 26.9987C98.1434 26.9987 98.7788 27.634 98.7788 28.2692V49.8682C98.7788 50.5035 98.1434 51.1387 97.508 51.1387C96.8727 50.8211 96.2373 50.1858 96.2373 49.5506Z" fill="#6BFFA0"/>
                <path opacity="0.4" d="M124.83 11.4348H114.028V182.003H124.83V11.4348Z" fill="#086608"/>
                <path opacity="0.2" d="M114.028 11.4348H103.227V182.003H114.028V11.4348Z" fill="#086608"/>
                <path d="M1925.72 237.233V97.5375H1899.18V237.233H1925.72Z" fill="#2A9D58"/>
                <path opacity="0.4" d="M1925.65 210.786H1899.11V220.932H1925.65V210.786Z" fill="#086608"/>
                <path opacity="0.4" d="M1925.65 119.737H1899.11V129.883H1925.65V119.737Z" fill="#086608"/>
                <path opacity="0.29" d="M1902.5 128.582V111.152C1902.5 110.632 1903.02 110.112 1903.54 110.112C1904.06 110.112 1904.58 110.632 1904.58 111.152V128.842C1904.58 129.362 1904.06 129.883 1903.54 129.883C1903.02 129.622 1902.5 129.102 1902.5 128.582Z" fill="#6BFFA0"/>
                <path opacity="0.4" d="M1925.91 97.3651H1917.07V237.06H1925.91V97.3651Z" fill="#086608"/>
                <path opacity="0.2" d="M1917.07 97.3651H1908.22V237.06H1917.07V97.3651Z" fill="#086608"/>
                <path d="M1156.3 237.331V40.5674L1118.92 40.5674V237.331H1156.3Z" fill="#DB3E20"/>
                <path d="M1156.22 199.908H1118.84V214.198H1156.22V199.908Z" fill="#913024"/>
                <path d="M1156.22 71.6641H1118.84V85.9542H1156.22V71.6641Z" fill="#913024"/>
                <path opacity="0.3" d="M1123.6 84.1222V59.2061C1123.6 58.4733 1124.34 57.7405 1125.07 57.7405C1125.8 57.7405 1126.53 58.4733 1126.53 59.2061V84.1222C1126.53 84.855 1125.8 85.5878 1125.07 85.5878C1124.34 85.5878 1123.6 85.2214 1123.6 84.1222Z" fill="#ECA49B"/>
                <path opacity="0.4" d="M1156.22 40.5191H1143.76V237.282H1156.22V40.5191Z" fill="#630C00"/>
                <path opacity="0.3" d="M1144.13 40.5191H1131.67V237.282H1144.13V40.5191Z" fill="#75170D"/>
                <path d="M1752.13 237.043V40.2798L1714.75 40.2798V237.043H1752.13Z" fill="#DB3E20"/>
                <path d="M1752.11 199.908H1714.73V214.198H1752.11V199.908Z" fill="#913024"/>
                <path d="M1752.11 71.6641H1714.73V85.9541H1752.11V71.6641Z" fill="#913024"/>
                <path opacity="0.3" d="M1719.5 84.1221V59.2061C1719.5 58.4732 1720.23 57.7404 1720.96 57.7404C1721.7 57.7404 1722.43 58.4732 1722.43 59.2061V84.1221C1722.43 84.8549 1721.7 85.5877 1720.96 85.5877C1719.86 85.5877 1719.5 85.2213 1719.5 84.1221Z" fill="#ECA49B"/>
                <path opacity="0.4" d="M1752.11 40.519H1739.65V237.282H1752.11V40.519Z" fill="#630C00"/>
                <path opacity="0.3" d="M1739.65 40.519H1727.19V237.282H1739.65V40.519Z" fill="#75170D"/>
                <path d="M1231.84 237.427V54.9539L1196.29 54.9539V237.427H1231.84Z" fill="#2A9D58"/>
                <g opacity="0.7">
                    <path d="M1231.23 105.902V71.8254H1196.78V105.902H1231.23Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M1225.12 105.741L1219.25 88.8856L1225.12 71.6642L1230.98 88.8856L1225.12 105.741Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1217.79 105.741L1211.92 88.8856L1217.79 71.6642L1223.65 88.8856L1217.79 105.741Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1210.09 105.741L1204.59 88.8856L1210.09 71.6642L1216.32 88.8856L1210.09 105.741Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1202.76 105.741L1196.9 88.8856L1202.76 71.6642L1208.63 88.8856L1202.76 105.741Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M1231.38 146.362V112.285H1196.93V146.362H1231.38Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M1225.12 146.412L1219.25 129.191L1225.12 112.336L1230.98 129.191L1225.12 146.412Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1217.79 146.412L1211.92 129.191L1217.79 112.336L1223.65 129.191L1217.79 146.412Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1210.09 146.412L1204.59 129.191L1210.09 112.336L1216.32 129.191L1210.09 146.412Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1202.76 146.412L1196.9 129.191L1202.76 112.336L1208.63 129.191L1202.76 146.412Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M1231.17 186.822V152.746H1196.72V186.822H1231.17Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M1225.12 186.718L1219.25 169.863L1225.12 152.641L1230.98 169.863L1225.12 186.718Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1217.79 186.718L1211.92 169.863L1217.79 152.641L1223.65 169.863L1217.79 186.718Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1210.09 186.718L1204.59 169.863L1210.09 152.641L1216.32 169.863L1210.09 186.718Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1202.76 186.718L1196.9 169.863L1202.76 152.641L1208.63 169.863L1202.76 186.718Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path opacity="0.2" d="M1231.71 202.107H1196.17V211.634H1231.71V202.107Z" fill="#086608"/>
                <path opacity="0.29" d="M1200.56 118.199V93.2825C1200.56 92.5496 1201.3 91.8168 1202.03 91.8168C1202.76 91.8168 1203.49 92.5496 1203.49 93.2825V118.199C1203.49 118.931 1202.76 119.664 1202.03 119.664C1201.3 119.664 1200.56 118.931 1200.56 118.199Z" fill="#6BFFA0"/>
                <path opacity="0.4" d="M1232.08 54.8092H1219.62V237.282H1232.08V54.8092Z" fill="#086608"/>
                <path opacity="0.2" d="M1219.62 54.8092H1207.16V237.282H1219.62V54.8092Z" fill="#086608"/>
                <path d="M1789.27 234.861L1779.3 94.1448L1751.88 96.0863L1761.85 236.802L1789.27 234.861Z" fill="#2A9D58"/>
                <g opacity="0.7">
                    <path d="M1781.72 133.635L1779.85 107.319L1753.17 109.209L1755.03 135.524L1781.72 133.635Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M1777.03 133.954L1771.9 121.13L1775.2 107.573L1780.7 120.397L1777.03 133.954Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1771.54 134.321L1766.04 121.496L1769.7 107.939L1775.2 120.763L1771.54 134.321Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1765.67 134.687L1760.18 121.863L1763.84 108.672L1769.34 121.496L1765.67 134.687Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1759.81 135.053L1754.31 122.229L1757.98 109.038L1763.47 121.863L1759.81 135.053Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M1783.97 164.814L1782.11 138.498L1755.42 140.388L1757.29 166.703L1783.97 164.814Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M1779.23 165.099L1774.1 152.275L1777.4 138.718L1782.9 151.542L1779.23 165.099Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1773.73 165.466L1768.24 152.641L1771.9 139.45L1777.4 152.275L1773.73 165.466Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1767.87 165.832L1762.37 153.008L1766.04 139.817L1771.54 152.641L1767.87 165.832Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1762.01 166.198L1756.51 153.374L1760.18 140.183L1765.67 153.008L1762.01 166.198Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M1786.23 195.992L1784.37 169.677L1757.68 171.566L1759.54 197.882L1786.23 195.992Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M1781.43 196.244L1776.3 183.42L1779.6 170.229L1785.1 183.053L1781.43 196.244Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1775.93 196.611L1770.44 183.786L1774.1 170.595L1779.6 183.42L1775.93 196.611Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1770.07 196.977L1764.57 184.519L1768.24 170.962L1773.74 183.786L1770.07 196.977Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1764.21 197.71L1758.71 184.886L1762.37 171.328L1767.87 184.153L1764.21 197.71Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                    <path opacity="0.2" d="M1787.38 208.114L1759.96 210.055L1760.48 217.365L1787.89 215.424L1787.38 208.114Z" fill="#086608"/>
                    <path opacity="0.29" d="M1758.71 144.947L1757.24 125.893C1757.24 125.16 1757.61 124.794 1758.34 124.794C1759.08 124.794 1759.44 125.16 1759.44 125.893L1760.91 144.947C1760.91 145.679 1760.54 146.046 1759.81 146.046C1759.44 146.046 1759.08 145.313 1758.71 144.947Z" fill="#6BFFA0"/>
                    <path opacity="0.4" d="M1779.37 94.2269L1769.86 94.8999L1779.83 235.616L1789.33 234.943L1779.37 94.2269Z" fill="#086608"/>
                    <path opacity="0.2" d="M1769.84 94.9626L1760.34 95.6357L1770.31 236.352L1779.81 235.679L1769.84 94.9626Z" fill="#086608"/>
                    <path d="M190.079 182.297L190.079 24.1165L159.263 24.1165L159.263 182.297H190.079Z" fill="#2A9D58"/>
                <g opacity="0.7">
                    <path d="M189.545 68.2813V38.7416L159.682 38.7416V68.2813H189.545Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M184.236 68.2908L179.471 53.6798L184.236 38.7511L189.319 53.6798L184.236 68.2908Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M177.882 68.2908L172.799 53.6798L177.882 38.7511L182.965 53.6798L177.882 68.2908Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M171.528 68.2908L166.445 53.6798L171.528 38.7511L176.611 53.6798L171.528 68.2908Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M164.856 68.2908L159.773 53.6798L164.856 38.7511L169.939 53.6798L164.856 68.2908Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M189.681 103.355V73.8154H159.818V103.355H189.681Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M184.237 103.23L179.472 88.6192L184.237 73.6906L189.32 88.6192L184.237 103.23Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M177.883 103.23L172.8 88.6192L177.883 73.6906L182.966 88.6192L177.883 103.23Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M171.528 103.23L166.445 88.6192L171.528 73.6906L176.611 88.6192L171.528 103.23Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M164.857 103.23L159.774 88.6192L164.857 73.6906L169.94 88.6192L164.857 103.23Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M189.814 138.429V108.889H159.952V138.429H189.814Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                    <path d="M184.237 138.487L179.472 123.559L184.237 108.948L189.32 123.559L184.237 138.487Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M177.883 138.487L172.8 123.559L177.883 108.948L182.966 123.559L177.883 138.487Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M171.528 138.487L166.445 123.559L171.528 108.948L176.611 123.559L171.528 138.487Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M164.857 138.487L159.774 123.559L164.857 108.948L169.94 123.559L164.857 138.487Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path opacity="0.2" d="M189.955 151.828H159.139V160.086H189.955V151.828Z" fill="#086608"/>
                <path opacity="0.29" d="M162.951 79.0903V57.4914C162.951 56.8561 163.587 56.2208 164.222 56.2208C164.857 56.2208 165.493 56.8561 165.493 57.4914V79.0903C165.493 79.7256 164.857 80.3608 164.222 80.3608C163.587 80.3608 162.951 79.7256 162.951 79.0903Z" fill="#6BFFA0"/>
                <path opacity="0.4" d="M190.272 24.14H179.471V182.321H190.272V24.14Z" fill="#086608"/>
                <path opacity="0.2" d="M179.47 24.14H168.669V182.321H179.47V24.14Z" fill="#086608"/>
                <path d="M159.274 182.01L159.274 0.00732422L124.646 0.00732422L124.646 182.01H159.274Z" fill="#DB3E20"/>
                <path d="M133.088 0V182.003" stroke="#913024"strokeMiterlimit="10"/>
                <path d="M139.125 0V182.003" stroke="#913024"strokeMiterlimit="10"/>
                <path d="M144.843 0V182.003" stroke="#913024"strokeMiterlimit="10"/>
                <path d="M150.562 0V182.003" stroke="#913024"strokeMiterlimit="10"/>
                <path opacity="0.3" d="M130.547 43.8332V22.2342C130.547 21.5989 131.182 20.9637 131.818 20.9637C132.453 20.9637 133.088 21.5989 133.088 22.2342V43.8332C133.088 44.4684 132.453 45.1037 131.818 45.1037C131.182 45.1037 130.547 44.4684 130.547 43.8332Z" fill="#ECA49B"/>
                <path opacity="0.4" d="M159.138 0H148.337V182.003H159.138V0Z" fill="#630C00"/>
                <path opacity="0.3" d="M148.655 0H137.854V182.003H148.655V0Z" fill="#75170D"/>
                <path d="M1675.97 239.037V63L1639 63V239.037H1675.97Z" fill="#2A9D58"/>
                <path opacity="0.4" d="M1647.91 63.1365V239.173" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.4" d="M1654.36 63.1365V239.173" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.4" d="M1660.46 63.1365V239.173" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.4" d="M1666.91 63.1365V239.173" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.29" d="M1645.2 105.225V84.3346C1645.2 83.7201 1645.88 83.1057 1646.56 83.1057C1647.24 83.1057 1647.91 83.7201 1647.91 84.3346V105.225C1647.91 105.84 1647.24 106.454 1646.56 106.454C1645.88 106.762 1645.2 106.147 1645.2 105.225Z" fill="#6BFFA0"/>
                <path opacity="0.4" d="M1676.06 63.1365H1664.53V239.173H1676.06V63.1365Z" fill="#086608"/>
                <path opacity="0.2" d="M1664.53 63.1365H1653V239.173H1664.53V63.1365Z" fill="#086608"/>
                <path d="M1195.94 237.096V27.1422L1155.99 27.1422V237.096H1195.94Z" fill="#2A9D58"/>
                <path opacity="0.4" d="M1166.11 26.9619V237.282" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.4" d="M1173.08 26.9619V237.282" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.4" d="M1179.67 26.9619V237.282" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.4" d="M1186.27 26.9619V237.282" stroke="#0C560C"strokeMiterlimit="10"/>
                <path opacity="0.29" d="M1163.18 77.5268V52.6107C1163.18 51.8779 1163.92 51.1451 1164.65 51.1451C1165.38 51.1451 1166.11 51.8779 1166.11 52.6107V77.5268C1166.11 78.2596 1165.38 78.9924 1164.65 78.9924C1163.92 78.9924 1163.18 78.2596 1163.18 77.5268Z" fill="#6BFFA0"/>
                <path opacity="0.4" d="M1196.17 26.9619H1183.71V236.916H1196.17V26.9619Z" fill="#086608"/>
                <path opacity="0.2" d="M1183.7 26.9619H1171.24V236.916H1183.7V26.9619Z" fill="#086608"/>
                <path d="M203.163 187.372L411.689 187.372L411.689 182.242L203.163 182.242L203.163 187.372Z" fill="#2A9D58"/>
                <path d="M203.163 237.679L411.689 237.679L411.689 232.549L203.163 232.549L203.163 237.679Z" fill="#2A9D58"/>
                <path d="M40.1307 238.015H227.401V181.954H40.1307C37.1989 181.954 35 184.519 35 187.45V232.519C35 235.45 37.1989 238.015 40.1307 238.015Z" fill="#2A9D58"/>
                <path d="M220.071 232.886H394.515L393.782 227.023C392.316 215.664 392.316 204.672 393.782 193.313L394.515 187.45H220.071C213.841 187.45 209.077 192.214 209.077 198.443V221.893C209.077 227.756 214.208 232.886 220.071 232.886Z" fill="#E5DDD4"/>
                <path d="M209.077 199.542H393.049L393.416 195.878H209.444L209.077 197.71V199.542Z" fill="#D4C8BB"/>
                <path d="M392.683 207.969H209.077V211.634H392.683V207.969Z" fill="#D4C8BB"/>
                <path d="M209.444 223.359H393.416L393.049 219.695H209.077L209.444 223.359Z" fill="#D4C8BB"/>
                <path d="M166.565 210.168L190.753 217.13L200.648 210.168L190.753 202.84L166.565 210.168Z" fill="#1A553E"/>
                <path d="M166.565 209.435L190.387 201.008L194.418 189.282H181.958L166.565 209.435Z" fill="#1A553E"/>
                <path d="M166.565 210.534L190.387 218.962L194.418 230.687H181.958L166.565 210.534Z" fill="#1A553E"/>
                <path d="M131.371 230.663L157.391 230.663L157.391 189.624L131.371 189.624L131.371 230.663Z" fill="#1A553E"/>
                <path d="M81.0579 230.663L91.3193 230.663L91.3193 189.624L81.0579 189.624L81.0579 230.663Z" fill="#1A553E"/>
                <path d="M50.184 230.663L50.917 230.663L50.917 189.624L50.184 189.624L50.184 230.663Z" fill="#1A553E"/>
                <path d="M228.867 209.435H232.165H235.464H238.396V244.611L233.631 237.649L228.867 244.611V209.435Z" fill="#DB3E20"/>
                <path opacity="0.25" d="M228.867 232.519H227.401H219.339C219.339 232.519 209.077 232.519 209.077 220.061V204.672C209.077 204.672 209.077 211.634 228.867 218.962" fill="#535B50"/>
                <path opacity="0.25" d="M238.396 222.26C253.788 226.657 277.609 230.687 314.257 232.886H238.396" fill="#535B50"/>
                <path opacity="0.4" d="M228.867 237.649H40.1307C35.3665 237.649 35 232.519 35 232.519V219.328H209.077C209.077 221.16 209.077 217.13 209.077 218.962C208.344 232.153 219.339 232.519 219.339 232.519H225.935H228.867" fill="#086608"/>
                <path opacity="0.4" d="M238.396 232.519H411.74V237.649H238.396" fill="#086608"/>
                <path opacity="0.2" d="M35.1308 219.185L209.208 219.185L209.208 204.895L35.1308 204.895L35.1308 219.185Z" fill="#086608"/>
                <path opacity="0.29" d="M60.2875 193.313H105.731C106.83 193.313 107.563 192.58 107.563 191.481V188.916C107.563 187.817 106.83 187.084 105.731 187.084H60.2875C59.188 187.084 58.4551 187.817 58.4551 188.916V191.481C58.4551 192.58 59.188 193.313 60.2875 193.313Z" fill="#6BFFA0"/>
                <path d="M22.2421 348.695H-165.028V293H22.2421C25.174 293 27.3728 295.198 27.3728 298.13V343.198C27.7393 346.13 25.174 348.695 22.2421 348.695Z" fill="#2A9D58"/>
                <path d="M14.9126 301.794H-19.1699V339.534H14.9126V301.794Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10"/>
                <path d="M14.9126 308.756L-1.94542 314.985L-19.1699 308.756L-1.94542 302.16L14.9126 308.756Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.9126 316.817L-1.94542 323.046L-19.1699 316.817L-1.94542 310.221L14.9126 316.817Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.9126 324.878L-1.94542 331.107L-19.1699 324.878L-1.94542 318.282L14.9126 324.878Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.9126 332.939L-1.94542 339.534L-19.1699 332.939L-1.94542 326.71L14.9126 332.939Z" stroke="#E5DDD4" strokeWidth="0.25"strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.4" d="M-146.704 330.374C-146.704 332.206 -146.704 328.176 -146.704 330.008C-145.971 343.198 -156.965 343.565 -156.965 343.565H-163.562H-349V348.695H22.2426C27.3733 348.328 27.3733 343.565 27.3733 343.565V330.374H-146.704Z" fill="#086608"/>
                <path opacity="0.2" d="M27.3731 315.718H-146.704V330.008H27.3731V315.718Z" fill="#086608"/>
            </svg>
        )
    }

    return (
        <svg 
            width="100%"
            viewBox="0 0 1920 356" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "",
                className
            )}
        >
            <path d="M961.748 122.264C435.879 122.264 7.48545 36.7169 -51 0V349H1949.5L1959 10.2202C1859.52 70.7842 1473.03 122.264 961.748 122.264Z" fill="hsl(var(--lightGrass))"/>
            <path d="M1751.14 242.156L1959.67 242.156L1959.67 237.026L1751.14 237.026L1751.14 242.156Z" fill="#2B9C58"/>
            <path d="M1751.14 292.829L1959.67 292.829L1959.67 287.7L1751.14 287.7L1751.14 292.829Z" fill="#2B9C58"/>
            <path d="M1588.25 292.977H1775.53V237.282H1588.25C1585.32 237.282 1583.12 239.481 1583.12 242.412V287.481C1583.12 290.412 1585.32 292.977 1588.25 292.977Z" fill="#2B9C58"/>
            <path d="M1768.2 287.847H1942.64L1941.91 281.985C1940.44 270.626 1940.44 259.634 1941.91 248.275L1942.64 242.412H1768.2C1761.97 242.412 1757.2 247.176 1757.2 253.405V276.855C1757.2 282.718 1762.33 287.847 1768.2 287.847Z" fill="#F9F8F7"/>
            <path d="M1711.16 283.981L1745.24 283.981L1745.24 246.24L1711.16 246.24L1711.16 283.981Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1672.78 283.981L1706.86 283.981L1706.86 246.24L1672.78 246.24L1672.78 283.981Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1595.6 283.981L1629.68 283.981L1629.68 246.24L1595.6 246.24L1595.6 283.981Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1711.39 253.038L1728.25 259.267L1745.47 253.038L1728.25 246.443L1711.39 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1711.39 261.099L1728.25 267.328L1745.47 261.099L1728.25 254.504L1711.39 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1711.39 269.16L1728.25 275.389L1745.47 269.16L1728.25 262.565L1711.39 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1711.39 277.221L1728.25 283.817L1745.47 277.221L1728.25 270.992L1711.39 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1672.54 253.038L1689.77 259.267L1706.63 253.038L1689.77 246.443L1672.54 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1672.54 261.099L1689.77 267.328L1706.63 261.099L1689.77 254.504L1672.54 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1672.54 269.16L1689.77 275.389L1706.63 269.16L1689.77 262.565L1672.54 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1672.54 277.221L1689.77 283.817L1706.63 277.221L1689.77 270.992L1672.54 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1633.92 283.981L1668 283.981L1668 246.24L1633.92 246.24L1633.92 283.981Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1634.06 253.038L1651.29 259.267L1668.15 253.038L1651.29 246.443L1634.06 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1634.06 261.099L1651.29 267.328L1668.15 261.099L1651.29 254.504L1634.06 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1634.06 269.16L1651.29 275.389L1668.15 269.16L1651.29 262.565L1634.06 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1634.06 277.221L1651.29 283.817L1668.15 277.221L1651.29 270.992L1634.06 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1595.58 253.038L1612.81 259.267L1629.67 253.038L1612.81 246.443L1595.58 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1595.58 261.099L1612.81 267.328L1629.67 261.099L1612.81 254.504L1595.58 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1595.58 269.16L1612.81 275.389L1629.67 269.16L1612.81 262.565L1595.58 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1595.58 277.221L1612.81 283.817L1629.67 277.221L1612.81 270.992L1595.58 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1757.2 254.504H1941.17L1941.54 250.84H1757.57L1757.2 252.672V254.504Z" fill="#EDE5DD"/>
            <path d="M1940.81 263.298H1757.2V266.962H1940.81V263.298Z" fill="#EDE5DD"/>
            <path d="M1757.2 278.321H1941.54L1941.17 274.656H1757.2V278.321Z" fill="#EDE5DD"/>
            <path opacity="0.25" d="M1757.2 260C1757.2 260 1756.83 281.252 1862.38 287.847H1775.89H1767.83C1767.83 287.847 1757.57 287.847 1757.57 275.389L1757.2 260Z" fill="#97A393"/>
            <path opacity="0.4" d="M1757.2 274.656C1757.2 276.489 1757.2 272.458 1757.2 274.29C1756.47 287.481 1767.46 287.847 1767.46 287.847H1774.06H1959.86V292.977H1588.25C1583.12 292.611 1583.12 287.847 1583.12 287.847V274.656H1757.2Z" fill="#086608"/>
            <path opacity="0.2" d="M1583 274.336L1757.08 274.336L1757.08 260.046L1583 260.046L1583 274.336Z" fill="#086608"/>
            <path opacity="0.29" d="M1634.43 253.038H1679.87C1680.97 253.038 1681.71 252.305 1681.71 251.206V248.641C1681.71 247.542 1680.97 246.809 1679.87 246.809H1634.43C1633.33 246.809 1632.6 247.542 1632.6 248.641V251.206C1632.97 252.305 1633.7 253.038 1634.43 253.038Z" fill="#54E287"/>
            <path d="M1422.65 292.977H1214.12V298.107H1422.65V292.977Z" fill="#2B9C58"/>
            <path d="M1422.65 343.542H1214.12V348.672H1422.65V343.542Z" fill="#2B9C58"/>
            <path d="M1585.37 348.672H1398.09V292.977H1585.37C1588.3 292.977 1590.5 295.175 1590.5 298.107V343.176C1590.5 346.107 1588.3 348.672 1585.37 348.672Z" fill="#2B9C58"/>
            <path d="M1405.42 343.542H1230.98L1231.71 337.679C1233.18 326.321 1233.18 315.328 1231.71 303.969L1230.98 298.107H1405.42C1411.65 298.107 1416.42 302.87 1416.42 309.099V332.55C1416.42 338.412 1411.29 343.542 1405.42 343.542Z" fill="#F9F8F7"/>
            <path d="M1416.42 310.198H1232.45L1232.08 306.534H1416.05L1416.42 308.366V310.198Z" fill="#EDE5DD"/>
            <path d="M1416.42 318.992H1232.81V322.656H1416.42V318.992Z" fill="#EDE5DD"/>
            <path d="M1416.05 334.015H1232.08L1232.45 330.351H1416.42L1416.05 334.015Z" fill="#EDE5DD"/>
            <path d="M1430.98 302.633V338.908H1489.25V302.633H1430.98Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1487.88 320.824L1459.66 339.145L1431.08 320.824L1459.66 302.504L1487.88 320.824Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1431.08 302.504L1459.66 321.557L1489.35 302.504" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1431.08 339.145L1459.66 321.557L1489.35 339.145" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1459.66 322.656C1460.47 322.656 1461.13 322.164 1461.13 321.557C1461.13 320.95 1460.47 320.458 1459.66 320.458C1458.85 320.458 1458.2 320.95 1458.2 321.557C1458.2 322.164 1458.85 322.656 1459.66 322.656Z" fill="#F9F8F7"/>
            <path d="M1449.04 322.29C1449.44 322.29 1449.77 321.962 1449.77 321.557C1449.77 321.152 1449.44 320.824 1449.04 320.824C1448.63 320.824 1448.3 321.152 1448.3 321.557C1448.3 321.962 1448.63 322.29 1449.04 322.29Z" fill="#F9F8F7"/>
            <path d="M1470.29 322.29C1470.7 322.29 1471.02 321.962 1471.02 321.557C1471.02 321.152 1470.7 320.824 1470.29 320.824C1469.89 320.824 1469.56 321.152 1469.56 321.557C1469.56 321.962 1469.89 322.29 1470.29 322.29Z" fill="#F9F8F7"/>
            <path d="M1459.66 314.229C1460.07 314.229 1460.4 313.901 1460.4 313.496C1460.4 313.091 1460.07 312.763 1459.66 312.763C1459.26 312.763 1458.93 313.091 1458.93 313.496C1458.93 313.901 1459.26 314.229 1459.66 314.229Z" fill="#F9F8F7"/>
            <path d="M1459.66 329.985C1460.07 329.985 1460.4 329.657 1460.4 329.252C1460.4 328.847 1460.07 328.519 1459.66 328.519C1459.26 328.519 1458.93 328.847 1458.93 329.252C1458.93 329.657 1459.26 329.985 1459.66 329.985Z" fill="#F9F8F7"/>
            <path d="M1459.66 314.962V321.557" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1459.66 321.557V327.786" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1451.23 321.557H1458.93" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1460.76 321.557H1468.46" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1515.31 302.675V338.95H1573.59V302.675H1515.31Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1572.17 320.824L1543.95 339.145L1515.37 320.824L1543.95 302.504L1572.17 320.824Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1515.37 302.504L1543.95 321.557L1573.64 302.504" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1515.37 339.145L1543.95 321.557L1573.64 339.145" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1543.95 322.656C1544.76 322.656 1545.42 322.164 1545.42 321.557C1545.42 320.95 1544.76 320.458 1543.95 320.458C1543.14 320.458 1542.49 320.95 1542.49 321.557C1542.49 322.164 1543.14 322.656 1543.95 322.656Z" fill="#F9F8F7"/>
            <path d="M1533.69 322.29C1534.1 322.29 1534.42 321.962 1534.42 321.557C1534.42 321.152 1534.1 320.824 1533.69 320.824C1533.29 320.824 1532.96 321.152 1532.96 321.557C1532.96 321.962 1533.29 322.29 1533.69 322.29Z" fill="#F9F8F7"/>
            <path d="M1554.95 322.29C1555.35 322.29 1555.68 321.962 1555.68 321.557C1555.68 321.152 1555.35 320.824 1554.95 320.824C1554.54 320.824 1554.21 321.152 1554.21 321.557C1554.21 321.962 1554.54 322.29 1554.95 322.29Z" fill="#F9F8F7"/>
            <path d="M1543.95 314.229C1544.36 314.229 1544.69 313.901 1544.69 313.496C1544.69 313.091 1544.36 312.763 1543.95 312.763C1543.55 312.763 1543.22 313.091 1543.22 313.496C1543.22 313.901 1543.55 314.229 1543.95 314.229Z" fill="#F9F8F7"/>
            <path d="M1543.95 329.985C1544.36 329.985 1544.69 329.657 1544.69 329.252C1544.69 328.847 1544.36 328.519 1543.95 328.519C1543.55 328.519 1543.22 328.847 1543.22 329.252C1543.22 329.657 1543.55 329.985 1543.95 329.985Z" fill="#F9F8F7"/>
            <path d="M1543.95 314.962V321.557" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1543.95 321.557V327.786" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1535.52 321.557H1543.22" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1545.05 321.557H1552.75" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.25" d="M1416.42 315.695C1416.42 315.695 1416.79 336.946 1311.24 343.542H1397.73H1405.79C1405.79 343.542 1416.05 343.542 1416.05 331.084L1416.42 315.695Z" fill="#97A393"/>
            <path opacity="0.4" d="M1416.42 330.351C1416.42 332.183 1416.42 328.153 1416.42 329.985C1417.15 343.175 1406.16 343.542 1406.16 343.542H1399.56H1213.76V348.672H1585C1590.13 348.305 1590.13 343.542 1590.13 343.542V330.351H1416.42Z" fill="#086608"/>
            <path opacity="0.2" d="M1590.5 315.695H1416.42V329.985H1590.5V315.695Z" fill="#086608"/>
            <path opacity="0.29" d="M1543.59 305.435H1498.14C1497.04 305.435 1496.31 304.702 1496.31 303.603V301.038C1496.31 299.939 1497.04 299.206 1498.14 299.206H1543.59C1544.69 299.206 1545.42 299.939 1545.42 301.038V303.603C1545.05 304.702 1544.32 305.435 1543.59 305.435Z" fill="#54E287"/>
            <path d="M1103.81 292.977H895.287V298.107H1103.81V292.977Z" fill="#2B9C58"/>
            <path d="M1103.81 343.542H895.287V348.672H1103.81V343.542Z" fill="#2B9C58"/>
            <path d="M1266.53 348.672H1079.26V292.977H1266.53C1269.46 292.977 1271.66 295.175 1271.66 298.107V343.176C1272.03 346.107 1269.46 348.672 1266.53 348.672Z" fill="#2B9C58"/>
            <path d="M1086.59 343.542H912.145L912.877 337.679C914.343 326.321 914.343 315.328 912.877 303.969L912.145 298.107H1086.59C1092.82 298.107 1097.58 302.87 1097.58 309.099V332.55C1097.58 338.412 1092.82 343.542 1086.59 343.542Z" fill="#F9F8F7"/>
            <path d="M1097.58 310.198H913.977L913.61 306.534H1097.58V308.366V310.198Z" fill="#EDE5DD"/>
            <path d="M1097.95 318.992H914.343V322.656H1097.95V318.992Z" fill="#EDE5DD"/>
            <path d="M1097.58 334.015H913.61L913.977 330.351H1097.58V334.015Z" fill="#EDE5DD"/>
            <path d="M1140.46 320.824L1116.27 328.153L1106.01 320.824L1116.27 313.496L1140.46 320.824Z" fill="#247F5C"/>
            <path d="M1140.46 320.092L1116.64 312.03L1112.61 300.305H1125.07L1140.46 320.092Z" fill="#247F5C"/>
            <path d="M1140.46 321.557L1116.64 329.618L1112.61 341.343H1125.07L1140.46 321.557Z" fill="#247F5C"/>
            <path d="M1175.64 300.305H1149.62V341.343H1175.64V300.305Z" fill="#247F5C"/>
            <path d="M1226.22 300.305H1215.96V341.343H1226.22V300.305Z" fill="#247F5C"/>
            <path d="M1256.63 300.305H1255.9V341.343H1256.63V300.305Z" fill="#247F5C"/>
            <path d="M1078.16 320.092H1074.86H1071.56H1068.26V355.267L1073.39 348.305L1078.16 355.267V320.092Z" fill="#FA5738"/>
            <path opacity="0.25" d="M1078.16 343.542H1079.63H1087.69C1087.69 343.542 1097.95 343.542 1097.95 331.084V315.695C1097.95 315.695 1097.95 322.656 1078.16 329.985" fill="#97A393"/>
            <path opacity="0.25" d="M1068.26 332.916C1052.87 337.313 1029.05 341.343 992.403 343.542H1068.26" fill="#97A393"/>
            <path opacity="0.4" d="M1078.16 348.672H1266.9C1272.03 348.305 1272.03 343.542 1272.03 343.542V330.351H1097.95C1097.95 332.183 1097.95 328.153 1097.95 329.985C1098.68 343.175 1087.69 343.542 1087.69 343.542H1081.09H1078.16" fill="#086608"/>
            <path opacity="0.4" d="M1068.26 343.542H895.287V348.672H1068.26" fill="#086608"/>
            <path opacity="0.2" d="M1271.66 315.695H1097.58V329.985H1271.66V315.695Z" fill="#086608"/>
            <path opacity="0.29" d="M1246.74 303.969H1201.3C1200.2 303.969 1199.46 303.237 1199.46 302.137V299.572C1199.46 298.473 1200.2 297.74 1201.3 297.74H1246.74C1247.84 297.74 1248.57 298.473 1248.57 299.572V302.137C1248.57 303.237 1247.47 303.969 1246.74 303.969Z" fill="#54E287"/>
            <path d="M1450.44 242.119L1658.96 242.119L1658.96 236.989L1450.44 236.989L1450.44 242.119Z" fill="#FA5738"/>
            <path d="M1450.44 292.793L1658.96 292.793L1658.96 287.663L1450.44 287.663L1450.44 292.793Z" fill="#FA5738"/>
            <path d="M1287.42 292.977H1474.69V237.282H1287.42C1284.49 237.282 1282.29 239.481 1282.29 242.412V287.481C1282.29 290.412 1284.49 292.977 1287.42 292.977Z" fill="#FA5738"/>
            <path d="M1467.36 287.847H1641.8L1641.07 281.985C1639.6 270.626 1639.6 259.634 1641.07 248.275L1641.8 242.412H1467.36C1461.13 242.412 1456.36 247.176 1456.36 253.405V276.855C1456.36 282.718 1461.5 287.847 1467.36 287.847Z" fill="#F9F8F7"/>
            <path d="M1456.36 254.504H1640.34L1640.7 250.84H1456.73L1456.36 252.672V254.504Z" fill="#EDE5DD"/>
            <path d="M1639.97 263.298H1456.36V266.962H1639.97V263.298Z" fill="#EDE5DD"/>
            <path d="M1456.73 278.321H1640.7L1640.34 274.656H1456.36L1456.73 278.321Z" fill="#EDE5DD"/>
            <path d="M1383.39 246.892L1383.39 283.167L1441.66 283.167L1441.66 246.892L1383.39 246.892Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1384.9 265.13L1413.12 283.084L1441.71 265.13L1413.12 246.809L1384.9 265.13Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1441.71 246.809L1413.12 265.863L1383.44 246.809" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1441.71 283.084L1413.12 265.496L1383.44 283.084" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1413.12 266.595C1413.93 266.595 1414.59 266.103 1414.59 265.496C1414.59 264.889 1413.93 264.397 1413.12 264.397C1412.31 264.397 1411.65 264.889 1411.65 265.496C1411.65 266.103 1412.31 266.595 1413.12 266.595Z" fill="#F9F8F7"/>
            <path d="M1423.75 266.229C1424.15 266.229 1424.48 265.901 1424.48 265.496C1424.48 265.091 1424.15 264.763 1423.75 264.763C1423.34 264.763 1423.02 265.091 1423.02 265.496C1423.02 265.901 1423.34 266.229 1423.75 266.229Z" fill="#F9F8F7"/>
            <path d="M1402.49 266.229C1402.9 266.229 1403.23 265.901 1403.23 265.496C1403.23 265.091 1402.9 264.763 1402.49 264.763C1402.09 264.763 1401.76 265.091 1401.76 265.496C1401.76 265.901 1402.09 266.229 1402.49 266.229Z" fill="#F9F8F7"/>
            <path d="M1413.12 258.534C1413.53 258.534 1413.85 258.206 1413.85 257.802C1413.85 257.397 1413.53 257.069 1413.12 257.069C1412.72 257.069 1412.39 257.397 1412.39 257.802C1412.39 258.206 1412.72 258.534 1413.12 258.534Z" fill="#F9F8F7"/>
            <path d="M1413.12 274.29C1413.53 274.29 1413.85 273.962 1413.85 273.557C1413.85 273.153 1413.53 272.824 1413.12 272.824C1412.72 272.824 1412.39 273.153 1412.39 273.557C1412.39 273.962 1412.72 274.29 1413.12 274.29Z" fill="#F9F8F7"/>
            <path d="M1413.12 259.267V265.496" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1413.12 265.496V272.092" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1421.55 265.496H1414.22" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1412.02 265.496H1404.32" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1299.06 246.849L1299.06 283.124L1357.33 283.124L1357.33 246.849L1299.06 246.849Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1300.61 265.13L1328.83 283.084L1357.42 265.13L1328.83 246.809L1300.61 265.13Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1357.42 246.809L1328.83 265.863L1299.15 246.809" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1357.42 283.084L1328.83 265.496L1299.15 283.084" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1328.83 266.595C1329.64 266.595 1330.3 266.103 1330.3 265.496C1330.3 264.889 1329.64 264.397 1328.83 264.397C1328.02 264.397 1327.36 264.889 1327.36 265.496C1327.36 266.103 1328.02 266.595 1328.83 266.595Z" fill="#F9F8F7"/>
            <path d="M1339.46 266.229C1339.86 266.229 1340.19 265.901 1340.19 265.496C1340.19 265.091 1339.86 264.763 1339.46 264.763C1339.05 264.763 1338.73 265.091 1338.73 265.496C1338.73 265.901 1339.05 266.229 1339.46 266.229Z" fill="#F9F8F7"/>
            <path d="M1318.2 266.229C1318.61 266.229 1318.94 265.901 1318.94 265.496C1318.94 265.091 1318.61 264.763 1318.2 264.763C1317.8 264.763 1317.47 265.091 1317.47 265.496C1317.47 265.901 1317.8 266.229 1318.2 266.229Z" fill="#F9F8F7"/>
            <path d="M1328.83 258.534C1329.23 258.534 1329.56 258.206 1329.56 257.802C1329.56 257.397 1329.23 257.069 1328.83 257.069C1328.43 257.069 1328.1 257.397 1328.1 257.802C1328.1 258.206 1328.43 258.534 1328.83 258.534Z" fill="#F9F8F7"/>
            <path d="M1328.83 274.29C1329.23 274.29 1329.56 273.962 1329.56 273.557C1329.56 273.153 1329.23 272.824 1328.83 272.824C1328.43 272.824 1328.1 273.153 1328.1 273.557C1328.1 273.962 1328.43 274.29 1328.83 274.29Z" fill="#F9F8F7"/>
            <path d="M1328.83 259.267V265.496" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1328.83 265.496V272.092" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1337.26 265.496H1329.56" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1327.73 265.496H1320.04" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.25" d="M1456.36 260C1456.36 260 1456 281.252 1561.54 287.847H1475.06H1466.99C1466.99 287.847 1456.73 287.847 1456.73 275.389L1456.36 260Z" fill="#A59A93"/>
            <path opacity="0.4" d="M1456.36 274.656C1456.36 276.489 1456.36 272.458 1456.36 274.29C1455.63 287.481 1466.63 287.847 1466.63 287.847H1473.22H1659.03V292.977H1287.42C1282.29 292.611 1282.29 287.847 1282.29 287.847V274.656H1456.36Z" fill="#AD1905"/>
            <path opacity="0.3" d="M1282.41 274.299L1456.48 274.299L1456.48 260.009L1282.41 260.009L1282.41 274.299Z" fill="#C12110"/>
            <path opacity="0.5" d="M1307.57 249.74H1353.02C1354.12 249.74 1354.85 249.008 1354.85 247.908V245.344C1354.85 244.244 1354.12 243.511 1353.02 243.511H1307.57C1306.48 243.511 1305.74 244.244 1305.74 245.344V247.908C1305.74 249.008 1306.48 249.74 1307.57 249.74Z" fill="#FFCCC5"/>
            <path d="M203.428 298.672L411.955 298.672L411.955 293.542L203.428 293.542L203.428 298.672Z" fill="#FA5738"/>
            <path d="M203.428 349.346L411.955 349.346L411.955 344.216L203.428 344.216L203.428 349.346Z" fill="#FA5738"/>
            <path d="M40.659 349.405H227.929V293.71H40.659C37.7272 293.71 35.5283 295.908 35.5283 298.84V343.908C35.5283 346.84 37.7272 349.405 40.659 349.405Z" fill="#FA5738"/>
            <path d="M220.6 344.275H395.044L394.311 338.412C392.845 327.053 392.845 316.061 394.311 304.702L395.044 298.84H220.6C214.37 298.84 209.605 303.603 209.605 309.832V333.282C209.605 339.145 214.37 344.275 220.6 344.275Z" fill="#F9F8F7"/>
            <path d="M209.605 310.931H393.578L393.944 307.267H209.972L209.605 309.099V310.931Z" fill="#EDE5DD"/>
            <path d="M393.211 319.725H209.605V323.389H393.211V319.725Z" fill="#EDE5DD"/>
            <path d="M209.605 334.748H393.944L393.578 331.084H209.605V334.748Z" fill="#EDE5DD"/>
            <path d="M76.9564 349.291L144.755 349.291L144.755 293.597L76.9564 293.597L76.9564 349.291Z" fill="#E54A35"/>
            <path d="M52.5592 349.291L65.7524 349.291L65.7524 293.597L52.5592 293.597L52.5592 349.291Z" fill="#E54A35"/>
            <path d="M176.838 349.291L190.031 349.291L190.031 293.597L176.838 293.597L176.838 349.291Z" fill="#E54A35"/>
            <path d="M170.783 349.291L172.249 349.291L172.249 293.597L170.783 293.597L170.783 349.291Z" fill="#E54A35"/>
            <path opacity="0.25" d="M209.605 316.427C209.605 316.427 209.239 337.679 314.785 344.275H227.929H219.867C219.867 344.275 209.605 344.275 209.605 331.817V316.427Z" fill="#A59A93"/>
            <path opacity="0.4" d="M209.606 331.084C209.606 332.916 209.606 328.885 209.606 330.718C208.873 343.908 219.867 344.275 219.867 344.275H226.464H412.268V349.405H40.659C35.5283 349.038 35.5283 344.275 35.5283 344.275V331.084H209.606Z" fill="#AD1905"/>
            <path opacity="0.3" d="M35.395 330.936L209.472 330.936L209.472 316.645L35.395 316.645L35.395 330.936Z" fill="#C12110"/>
            <path opacity="0.5" d="M60.8153 306.168H106.259C107.358 306.168 108.091 305.435 108.091 304.336V301.771C108.091 300.672 107.358 299.939 106.259 299.939H60.8153C59.7159 299.939 58.9829 300.672 58.9829 301.771V304.336C58.9829 305.435 59.7159 306.168 60.8153 306.168Z" fill="#FFCCC5"/>
            <path d="M1057.91 242.146L1266.44 242.146L1266.44 237.016L1057.91 237.016L1057.91 242.146Z" fill="#FA5738"/>
            <path d="M1057.91 292.82L1266.44 292.82L1266.44 287.69L1057.91 287.69L1057.91 292.82Z" fill="#FA5738"/>
            <path d="M894.92 292.977H1082.19V237.282H894.92C891.988 237.282 889.79 239.481 889.79 242.412V287.481C889.79 290.412 891.988 292.977 894.92 292.977Z" fill="#FA5738"/>
            <path d="M1074.86 287.847H1249.3L1248.57 281.985C1247.11 270.626 1247.11 259.634 1248.57 248.275L1249.3 242.412H1074.86C1068.63 242.412 1063.87 247.176 1063.87 253.405V276.855C1063.87 282.718 1069 287.847 1074.86 287.847Z" fill="#F9F8F7"/>
            <path d="M1017.93 283.971L1052.01 283.971L1052.01 246.231L1017.93 246.231L1017.93 283.971Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M979.176 283.971L1013.26 283.971L1013.26 246.231L979.176 246.231L979.176 283.971Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M940.69 283.971L974.772 283.971L974.772 246.231L940.69 246.231L940.69 283.971Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M902.366 283.971L936.448 283.971L936.448 246.231L902.366 246.231L902.366 283.971Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1018.06 253.038L1034.92 259.267L1052.14 253.038L1034.92 246.443L1018.06 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1018.06 261.099L1034.92 267.328L1052.14 261.099L1034.92 254.504L1018.06 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1018.06 269.16L1034.92 275.389L1052.14 269.16L1034.92 262.565L1018.06 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1018.06 277.221L1034.92 283.45L1052.14 277.221L1034.92 270.992L1018.06 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M979.21 253.038L996.435 259.267L1013.29 253.038L996.435 246.443L979.21 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M979.21 261.099L996.435 267.328L1013.29 261.099L996.435 254.504L979.21 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M979.21 269.16L996.435 275.389L1013.29 269.16L996.435 262.565L979.21 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M979.21 277.221L996.435 283.45L1013.29 277.221L996.435 270.992L979.21 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M940.73 253.038L957.954 259.267L974.812 253.038L957.954 246.443L940.73 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M940.73 261.099L957.954 267.328L974.812 261.099L957.954 254.504L940.73 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M940.73 269.16L957.954 275.389L974.812 269.16L957.954 262.565L940.73 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M940.73 277.221L957.954 283.45L974.812 277.221L957.954 270.992L940.73 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M902.25 253.038L919.474 259.267L936.332 253.038L919.474 246.443L902.25 253.038Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M902.25 261.099L919.474 267.328L936.332 261.099L919.474 254.504L902.25 261.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M902.25 269.16L919.474 275.389L936.332 269.16L919.474 262.565L902.25 269.16Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M902.25 277.221L919.474 283.45L936.332 277.221L919.474 270.992L902.25 277.221Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1063.87 254.504H1247.84L1248.21 250.84H1064.23L1063.87 252.672V254.504Z" fill="#EDE5DD"/>
            <path d="M1247.47 263.298H1063.87V266.962H1247.47V263.298Z" fill="#EDE5DD"/>
            <path d="M1064.23 278.321H1248.21L1247.84 274.656H1063.87L1064.23 278.321Z" fill="#EDE5DD"/>
            <path opacity="0.25" d="M1063.87 260C1063.87 260 1063.5 281.252 1169.05 287.847H1082.56H1074.13C1074.13 287.847 1063.87 287.847 1063.87 275.389V260Z" fill="#A59A93"/>
            <path opacity="0.4" d="M1063.87 274.656C1063.87 276.489 1063.87 272.458 1063.87 274.29C1063.13 287.481 1074.13 287.847 1074.13 287.847H1080.72H1266.53V292.977H894.92C889.79 292.611 889.79 287.847 889.79 287.847V274.656H1063.87Z" fill="#AD1905"/>
            <path opacity="0.3" d="M889.878 274.41L1063.96 274.41L1063.96 260.119L889.878 260.119L889.878 274.41Z" fill="#C12110"/>
            <path opacity="0.5" d="M915.077 249.374H960.52C961.619 249.374 962.352 248.641 962.352 247.542V244.977C962.352 243.878 961.619 243.145 960.52 243.145H915.077C913.977 243.145 913.244 243.878 913.244 244.977V247.542C913.244 248.641 913.977 249.374 915.077 249.374Z" fill="#FFCCC5"/>
            <path d="M430.959 126.26H222.433V131.389H430.959V126.26Z" fill="#FA5738"/>
            <path d="M430.959 176.824H222.433V181.954H430.959V176.824Z" fill="#FA5738"/>
            <path d="M593.675 181.954H406.405V126.26H593.675C596.607 126.26 598.806 128.458 598.806 131.389V176.458C598.806 179.756 596.607 181.954 593.675 181.954Z" fill="#FA5738"/>
            <path d="M413.734 176.824H239.291L240.023 170.962C241.489 159.603 241.489 148.611 240.023 137.252L239.291 131.389H413.734C419.964 131.389 424.729 136.153 424.729 142.382V165.832C424.729 172.061 419.598 176.824 413.734 176.824Z" fill="#F9F8F7"/>
            <path d="M470.539 135.42H436.456V173.16H470.539V135.42Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M509.385 135.42H475.303V173.16H509.385V135.42Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M547.865 135.42H513.783V173.16H547.865V135.42Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M586.346 135.42H552.263V173.16H586.346V135.42Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M470.539 142.015L453.681 148.244L436.456 142.015L453.681 135.42L470.539 142.015Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M470.539 150.076L453.681 156.305L436.456 150.076L453.681 143.481L470.539 150.076Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M470.539 158.137L453.681 164.733L436.456 158.137L453.681 151.908L470.539 158.137Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M470.539 166.565L453.681 172.794L436.456 166.565L453.681 159.969L470.539 166.565Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M509.385 142.015L492.161 148.244L475.303 142.015L492.161 135.42L509.385 142.015Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M509.385 150.076L492.161 156.305L475.303 150.076L492.161 143.481L509.385 150.076Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M509.385 158.137L492.161 164.733L475.303 158.137L492.161 151.908L509.385 158.137Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M509.385 166.565L492.161 172.794L475.303 166.565L492.161 159.969L509.385 166.565Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M547.865 142.015L530.641 148.244L513.783 142.015L530.641 135.42L547.865 142.015Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M547.865 150.076L530.641 156.305L513.783 150.076L530.641 143.481L547.865 150.076Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M547.865 158.137L530.641 164.733L513.783 158.137L530.641 151.908L547.865 158.137Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M547.865 166.565L530.641 172.794L513.783 166.565L530.641 159.969L547.865 166.565Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M586.346 142.015L569.488 148.244L552.263 142.015L569.488 135.42L586.346 142.015Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M586.346 150.076L569.488 156.305L552.263 150.076L569.488 143.481L586.346 150.076Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M586.346 158.137L569.488 164.733L552.263 158.137L569.488 151.908L586.346 158.137Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M586.346 166.565L569.488 172.794L552.263 166.565L569.488 159.969L586.346 166.565Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M424.729 143.847H240.757L240.39 140.183H424.362L424.729 142.015V143.847Z" fill="#EDE5DD"/>
            <path d="M424.729 152.275H241.123V155.939H424.729V152.275Z" fill="#EDE5DD"/>
            <path d="M424.729 167.298H240.39L240.757 163.634H424.729V167.298Z" fill="#EDE5DD"/>
            <path opacity="0.25" d="M424.729 148.977C424.729 148.977 425.095 170.229 319.549 176.824H406.038H414.101C414.101 176.824 424.362 176.824 424.362 164.366L424.729 148.977Z" fill="#A59A93"/>
            <path opacity="0.4" d="M424.729 163.634C424.729 165.466 424.729 161.435 424.729 163.267C425.462 176.458 414.467 176.824 414.467 176.824H407.871H222.433V181.954H593.675C598.806 181.588 598.806 176.824 598.806 176.824V163.634H424.729Z" fill="#AD1905"/>
            <path opacity="0.3" d="M598.806 148.977H424.729V163.267H598.806V148.977Z" fill="#C12110"/>
            <path opacity="0.5" d="M573.519 138.351H528.076C526.976 138.351 526.243 137.618 526.243 136.519V133.954C526.243 132.855 526.976 132.122 528.076 132.122H573.519C574.618 132.122 575.351 132.855 575.351 133.954V136.885C575.351 137.618 574.618 138.351 573.519 138.351Z" fill="#FFCCC5"/>
            <path d="M670.636 293.344H462.109V298.473H670.636V293.344Z" fill="#FA5738"/>
            <path d="M670.636 343.908H462.109V349.038H670.636V343.908Z" fill="#FA5738"/>
            <path d="M833.352 349.038H646.082V293.344H833.352C836.284 293.344 838.483 295.542 838.483 298.473V343.542C838.483 346.84 836.284 349.038 833.352 349.038Z" fill="#FA5738"/>
            <path d="M653.411 343.908H478.967L479.7 338.046C481.166 326.687 481.166 315.695 479.7 304.336L478.967 298.473H653.411C659.641 298.473 664.405 303.237 664.405 309.466V332.916C664.405 339.145 659.641 343.908 653.411 343.908Z" fill="#F9F8F7"/>
            <path d="M664.405 310.931H480.433L480.067 307.267H664.039L664.405 309.099V310.931Z" fill="#EDE5DD"/>
            <path d="M664.405 319.359H480.8V323.023H664.405V319.359Z" fill="#EDE5DD"/>
            <path d="M664.405 334.382H480.433V330.718H664.405V334.382Z" fill="#EDE5DD"/>
            <path d="M760.056 304.336H743.931L735.869 321.191L743.931 338.046H760.056L767.752 321.191L760.056 304.336Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M768.852 304.336H735.136V338.046H768.852V304.336Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M754.926 314.595H748.696L745.764 321.191L748.696 327.786H754.926L758.224 321.191L754.926 314.595Z" fill="#F9F8F7"/>
            <path d="M699.954 304.336H683.829L675.766 321.191L683.829 338.046H699.954L707.65 321.191L699.954 304.336Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M708.749 304.336H675.033V338.046H708.749V304.336Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M694.823 314.595H688.593L685.661 321.191L688.593 327.786H694.823L698.121 321.191L694.823 314.595Z" fill="#F9F8F7"/>
            <path d="M819.426 304.336H803.667L795.604 321.191L803.667 338.046H819.426L827.488 321.191L819.426 304.336Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M828.588 304.336H794.872V338.046H828.588V304.336Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M814.661 314.595H808.431L805.5 321.191L808.431 327.786H814.661L817.96 321.191L814.661 314.595Z" fill="#F9F8F7"/>
            <path d="M723.775 304.702H720.11V338.412H723.775V304.702Z" fill="#F9F8F7"/>
            <path d="M783.877 304.702H780.212V338.412H783.877V304.702Z" fill="#F9F8F7"/>
            <path opacity="0.25" d="M664.405 316.427C664.405 316.427 664.772 337.679 559.226 344.275H645.715H653.777C653.777 344.275 664.039 344.275 664.039 331.817L664.405 316.427Z" fill="#A59A93"/>
            <path opacity="0.4" d="M664.405 330.718C664.405 332.55 664.405 328.519 664.405 330.351C665.138 343.542 654.144 343.908 654.144 343.908H647.547H462.109V349.038H833.352C838.483 348.672 838.483 343.908 838.483 343.908V330.718H664.405Z" fill="#AD1905"/>
            <path opacity="0.3" d="M838.482 316.427H664.405V330.718H838.482V316.427Z" fill="#C12110"/>
            <path opacity="0.5" d="M810.264 307.634H764.821C763.721 307.634 762.988 306.901 762.988 305.802V303.237C762.988 302.137 763.721 301.405 764.821 301.405H810.264C811.363 301.405 812.096 302.137 812.096 303.237V305.802C812.096 306.901 811.363 307.634 810.264 307.634Z" fill="#FFCCC5"/>
            <path d="M665.425 243.856L873.952 243.856L873.952 238.726L665.425 238.726L665.425 243.856Z" fill="#FA5738"/>
            <path d="M665.425 294.53L873.952 294.53L873.952 289.4L665.425 289.4L665.425 294.53Z" fill="#FA5738"/>
            <path d="M502.422 294.443H689.692V238.748H502.422C499.49 238.748 497.291 240.947 497.291 243.878V288.947C497.291 292.244 499.49 294.443 502.422 294.443Z" fill="#FA5738"/>
            <path d="M682.363 289.313H856.806L856.073 283.45C854.607 272.092 854.607 261.099 856.073 249.74L856.806 243.878H682.363C676.132 243.878 671.368 248.641 671.368 254.87V278.321C671.368 284.55 676.499 289.313 682.363 289.313Z" fill="#F9F8F7"/>
            <path d="M671.368 256.336H855.34L855.707 252.672H671.735L671.368 254.504V256.336Z" fill="#EDE5DD"/>
            <path d="M854.974 264.763H671.368V268.427H854.974V264.763Z" fill="#EDE5DD"/>
            <path d="M671.735 279.786H855.707L855.34 276.122H671.368L671.735 279.786Z" fill="#EDE5DD"/>
            <path d="M628.857 266.595L653.045 273.924L662.939 266.595L653.045 259.634L628.857 266.595Z" fill="#DB4633"/>
            <path d="M628.857 265.863L652.678 257.802L656.709 246.076H644.249L628.857 265.863Z" fill="#DB4633"/>
            <path d="M628.857 267.328L652.678 275.389L656.709 287.114H644.249L628.857 267.328Z" fill="#DB4633"/>
            <path d="M593.632 287.147L619.652 287.147L619.652 246.109L593.632 246.109L593.632 287.147Z" fill="#DB4633"/>
            <path d="M543.32 287.147L553.582 287.147L553.582 246.109L543.32 246.109L543.32 287.147Z" fill="#DB4633"/>
            <path d="M691.158 265.863H694.456H697.755H700.687V301.405L695.922 294.443L691.158 301.405V265.863Z" fill="#2B9C58"/>
            <path opacity="0.25" d="M691.158 289.313H689.692H681.63C681.63 289.313 671.368 289.313 671.368 276.855V261.466C671.368 261.466 671.368 268.427 691.158 275.756" fill="#A59A93"/>
            <path opacity="0.25" d="M700.687 278.687C716.079 283.084 739.9 287.114 776.548 289.313H700.687" fill="#A59A93"/>
            <path opacity="0.4" d="M700.687 289.313H873.664V294.443H700.687" fill="#AD1905"/>
            <path opacity="0.4" d="M691.158 294.443H502.422C497.291 294.076 497.291 289.313 497.291 289.313V276.122H671.368C671.368 277.954 671.368 273.924 671.368 275.756C670.635 288.947 681.63 289.313 681.63 289.313H688.226H691.158" fill="#AD1905"/>
            <path opacity="0.3" d="M497.392 276.12L671.469 276.12L671.469 261.829L497.392 261.829L497.392 276.12Z" fill="#C12110"/>
            <path opacity="0.5" d="M525.51 249.74H570.953C572.052 249.74 572.785 249.008 572.785 247.908V245.344C572.785 244.244 572.052 243.511 570.953 243.511H525.51C524.41 243.511 523.677 244.244 523.677 245.344V247.908C524.044 249.008 524.777 249.74 525.51 249.74Z" fill="#FFCCC5"/>
            <path d="M1774.98 298.303L1983.51 298.303L1983.51 293.173L1774.98 293.173L1774.98 298.303Z" fill="#FA5738"/>
            <path d="M1774.98 348.977L1983.51 348.977L1983.51 343.847L1774.98 343.847L1774.98 348.977Z" fill="#FA5738"/>
            <path d="M1612.08 349.038H1799.35V293.343H1612.08C1609.14 293.343 1606.95 295.542 1606.95 298.473V343.542C1606.95 346.473 1609.14 349.038 1612.08 349.038Z" fill="#FA5738"/>
            <path d="M1792.02 343.908H1966.46L1965.73 338.046C1964.26 326.687 1964.26 315.695 1965.73 304.336L1966.46 298.473H1792.02C1785.79 298.473 1781.02 303.237 1781.02 309.466V332.916C1781.02 338.779 1786.15 343.908 1792.02 343.908Z" fill="#F9F8F7"/>
            <path d="M1781.02 310.565H1964.99L1965.36 306.901H1781.39L1781.02 308.733V310.565Z" fill="#EDE5DD"/>
            <path d="M1964.63 319.359H1781.02V323.023H1964.63V319.359Z" fill="#EDE5DD"/>
            <path d="M1781.02 334.382H1965.36L1964.99 330.718H1781.02V334.382Z" fill="#EDE5DD"/>
            <path d="M1738.51 321.191L1762.7 328.519L1772.59 321.191L1762.7 313.863L1738.51 321.191Z" fill="#DB4633"/>
            <path d="M1738.51 320.458L1762.33 312.397L1766.36 300.672H1753.9L1738.51 320.458Z" fill="#DB4633"/>
            <path d="M1738.51 321.924L1762.33 329.985L1766.36 341.71H1753.9L1738.51 321.924Z" fill="#DB4633"/>
            <path d="M1703.19 341.594L1729.21 341.594L1729.21 300.556L1703.19 300.556L1703.19 341.594Z" fill="#DB4633"/>
            <path d="M1652.88 341.594L1663.14 341.594L1663.14 300.556L1652.88 300.556L1652.88 341.594Z" fill="#DB4633"/>
            <path d="M1800.81 320.458H1804.11H1807.04H1810.34V356L1805.58 348.672L1800.81 356V320.458Z" fill="#2B9C58"/>
            <path opacity="0.25" d="M1800.81 343.908H1799.35H1791.28C1791.28 343.908 1781.02 343.908 1781.02 331.45V316.061C1781.02 316.061 1781.02 323.023 1800.81 330.351" fill="#A59A93"/>
            <path opacity="0.25" d="M1810.34 333.282C1825.73 337.679 1849.55 341.71 1886.2 343.908H1810.34" fill="#A59A93"/>
            <path opacity="0.4" d="M1810.34 343.908H1983.32V349.038H1810.34" fill="#AD1905"/>
            <path opacity="0.4" d="M1800.81 349.038H1612.08C1606.95 348.672 1606.95 343.908 1606.95 343.908V330.718H1781.02C1781.02 332.55 1781.02 328.519 1781.02 330.351C1780.29 343.542 1791.28 343.908 1791.28 343.908H1797.88H1800.81" fill="#AD1905"/>
            <path opacity="0.3" d="M1606.95 330.567L1781.03 330.567L1781.03 316.277L1606.95 316.277L1606.95 330.567Z" fill="#C12110"/>
            <path opacity="0.5" d="M1635.16 304.336H1680.61C1681.71 304.336 1682.44 303.603 1682.44 302.504V299.939C1682.44 298.84 1681.71 298.107 1680.61 298.107H1635.16C1634.06 298.107 1633.33 298.84 1633.33 299.939V302.504C1633.33 303.603 1634.43 304.336 1635.16 304.336Z" fill="#FFCCC5"/>
            <path d="M695.189 182.321H486.663V187.45H695.189V182.321Z" fill="#2B9C58"/>
            <path d="M695.189 232.885H486.663V238.015H695.189V232.885Z" fill="#2B9C58"/>
            <path d="M858.272 238.015H671.001V182.321H858.272C861.204 182.321 863.403 184.519 863.403 187.45V232.519C863.403 235.45 861.204 238.015 858.272 238.015Z" fill="#2B9C58"/>
            <path d="M678.331 232.885H503.888L504.621 227.023C506.087 215.664 506.087 204.672 504.621 193.313L503.888 187.45H678.331C684.562 187.45 689.326 192.214 689.326 198.443V221.893C689.326 227.756 684.195 232.885 678.331 232.885Z" fill="#F9F8F7"/>
            <path d="M689.325 199.542H505.353L504.987 195.878H688.959L689.325 197.71V199.542Z" fill="#EDE5DD"/>
            <path d="M689.325 208.336H505.72V212H689.325V208.336Z" fill="#EDE5DD"/>
            <path d="M688.959 223.359H504.987L505.353 219.695H689.325L688.959 223.359Z" fill="#EDE5DD"/>
            <path d="M820.891 182.321H753.826V238.015H820.891V182.321Z" fill="#27894A"/>
            <path d="M845.445 182.321H832.252V238.015H845.445V182.321Z" fill="#27894A"/>
            <path d="M720.843 182.321H707.649V238.015H720.843V182.321Z" fill="#27894A"/>
            <path d="M726.706 182.321H725.607V238.015H726.706V182.321Z" fill="#27894A"/>
            <path opacity="0.25" d="M689.326 205.038C689.326 205.038 689.692 226.29 584.146 232.885H670.635H678.698C678.698 232.885 688.959 232.886 688.959 220.428L689.326 205.038Z" fill="#97A393"/>
            <path opacity="0.4" d="M689.326 219.695C689.326 221.527 689.326 217.496 689.326 219.328C690.059 232.519 679.064 232.885 679.064 232.885H672.468H486.663V238.015H857.906C863.036 237.649 863.036 232.885 863.036 232.885V219.695H689.326Z" fill="#086608"/>
            <path opacity="0.2" d="M863.403 205.038H689.326V219.328H863.403V205.038Z" fill="#086608"/>
            <path opacity="0.29" d="M816.127 194.779H770.684C769.585 194.779 768.852 194.046 768.852 192.947V190.382C768.852 189.282 769.585 188.55 770.684 188.55H816.127C817.227 188.55 817.96 189.282 817.96 190.382V192.947C817.96 194.046 817.227 194.779 816.127 194.779Z" fill="#54E287"/>
            <path d="M177.526 238.015H-31V243.145H177.526V238.015Z" fill="#2B9C58"/>
            <path d="M177.526 288.58H-31V293.71H177.526V288.58Z" fill="#2B9C58"/>
            <path d="M340.243 293.71H152.972V238.015H340.243C343.174 238.015 345.373 240.214 345.373 243.145V288.214C345.74 291.145 343.174 293.71 340.243 293.71Z" fill="#2B9C58"/>
            <path d="M160.302 288.58H-14.1421L-13.4091 282.718C-11.9432 271.359 -11.9432 260.366 -13.4091 249.008L-14.1421 243.145H160.302C166.532 243.145 171.296 247.908 171.296 254.137V277.588C171.296 283.45 166.532 288.58 160.302 288.58Z" fill="#F9F8F7"/>
            <path d="M217.472 246.809H183.39V284.55H217.472V246.809Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M255.953 246.809H221.87V284.55H255.953V246.809Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M332.913 246.809H298.831V284.55H332.913V246.809Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M217.472 253.771L200.248 260L183.39 253.771L200.248 247.176L217.472 253.771Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M217.472 261.832L200.248 268.061L183.39 261.832L200.248 255.237L217.472 261.832Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M217.472 269.893L200.248 276.122L183.39 269.893L200.248 263.298L217.472 269.893Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M217.472 277.954L200.248 284.55L183.39 277.954L200.248 271.725L217.472 277.954Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M255.953 253.771L239.095 260L221.87 253.771L239.095 247.176L255.953 253.771Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M255.953 261.832L239.095 268.061L221.87 261.832L239.095 255.237L255.953 261.832Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M255.953 269.893L239.095 276.122L221.87 269.893L239.095 263.298L255.953 269.893Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M255.953 277.954L239.095 284.55L221.87 277.954L239.095 271.725L255.953 277.954Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M294.799 246.809H260.717V284.55H294.799V246.809Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M294.433 253.771L277.575 260L260.35 253.771L277.575 247.176L294.433 253.771Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M294.433 261.832L277.575 268.061L260.35 261.832L277.575 255.237L294.433 261.832Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M294.433 269.893L277.575 276.122L260.35 269.893L277.575 263.298L294.433 269.893Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M294.433 277.954L277.575 284.55L260.35 277.954L277.575 271.725L294.433 277.954Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M332.913 253.771L316.055 260L298.831 253.771L316.055 247.176L332.913 253.771Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M332.913 261.832L316.055 268.061L298.831 261.832L316.055 255.237L332.913 261.832Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M332.913 269.893L316.055 276.122L298.831 269.893L316.055 263.298L332.913 269.893Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M332.913 277.954L316.055 284.55L298.831 277.954L316.055 271.725L332.913 277.954Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M171.296 255.237H-12.676L-13.0425 251.573H170.93L171.296 253.405V255.237Z" fill="#EDE5DD"/>
            <path d="M171.296 264.031H-12.3096V267.695H171.296V264.031Z" fill="#EDE5DD"/>
            <path d="M171.296 279.053H-12.6763V275.389H171.296V279.053Z" fill="#EDE5DD"/>
            <path opacity="0.25" d="M171.296 260.733C171.296 260.733 171.662 281.985 66.1167 288.58H152.606H161.035C161.035 288.58 171.296 288.58 171.296 276.122V260.733Z" fill="#97A393"/>
            <path opacity="0.4" d="M171.296 275.389C171.296 277.221 171.296 273.191 171.296 275.023C172.029 288.214 161.035 288.58 161.035 288.58H154.438H-31V293.71H340.243C345.373 293.343 345.373 288.58 345.373 288.58V275.389H171.296Z" fill="#086608"/>
            <path opacity="0.2" d="M345.373 260.733H171.296V275.023H345.373V260.733Z" fill="#086608"/>
            <path opacity="0.29" d="M294.066 253.771H248.623C247.523 253.771 246.791 253.038 246.791 251.939V249.374C246.791 248.275 247.523 247.542 248.623 247.542H294.066C295.166 247.542 295.899 248.275 295.899 249.374V251.939C295.899 253.038 295.166 253.771 294.066 253.771Z" fill="#54E287"/>
            <path d="M1340.89 186.243L1549.42 186.243L1549.42 181.113L1340.89 181.113L1340.89 186.243Z" fill="#2B9C58"/>
            <path d="M1340.89 236.551L1549.42 236.551L1549.42 231.421L1340.89 231.421L1340.89 236.551Z" fill="#2B9C58"/>
            <path d="M1178.21 236.55H1365.48V180.855H1178.21C1175.28 180.855 1173.08 183.053 1173.08 185.985V231.053C1173.08 234.351 1175.28 236.55 1178.21 236.55Z" fill="#2B9C58"/>
            <path d="M1358.15 231.786H1532.59L1531.86 225.924C1530.39 214.565 1530.39 203.573 1531.86 192.214L1532.59 186.351H1358.15C1351.92 186.351 1347.15 191.115 1347.15 197.344V220.794C1347.15 226.657 1351.92 231.786 1358.15 231.786Z" fill="#F9F8F7"/>
            <path d="M1347.15 198.443H1531.13L1531.49 194.779H1347.52L1347.15 196.611V198.443Z" fill="#EDE5DD"/>
            <path d="M1530.76 206.87H1347.15V210.534H1530.76V206.87Z" fill="#EDE5DD"/>
            <path d="M1347.15 221.893H1531.49L1531.13 218.229H1347.15V221.893Z" fill="#EDE5DD"/>
            <path d="M1251.5 192.214H1267.63L1275.69 208.702L1267.63 225.557H1251.5L1243.81 208.702L1251.5 192.214Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1242.8 225.508L1276.51 225.508L1276.51 191.798L1242.8 191.798L1242.8 225.508Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1256.63 202.107H1262.86L1265.8 208.702L1262.86 215.298H1256.63L1253.34 208.702L1256.63 202.107Z" fill="#F9F8F7"/>
            <path d="M1311.61 192.214H1327.73L1335.79 208.702L1327.73 225.557H1311.61L1303.91 208.702L1311.61 192.214Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1302.95 225.508L1336.67 225.508L1336.67 191.798L1302.95 191.798L1302.95 225.508Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1316.74 202.107H1322.97L1325.9 208.702L1322.97 215.298H1316.74L1313.44 208.702L1316.74 202.107Z" fill="#F9F8F7"/>
            <path d="M1192.13 192.214H1207.89L1215.95 208.702L1207.89 225.557H1192.13L1184.07 208.702L1192.13 192.214Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1183.24 225.508L1216.96 225.508L1216.96 191.798L1183.24 191.798L1183.24 225.508Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M1196.9 202.107H1203.13L1206.06 208.702L1203.13 215.298H1196.9L1193.6 208.702L1196.9 202.107Z" fill="#F9F8F7"/>
            <path d="M1287.9 225.644L1291.56 225.644L1291.56 191.935L1287.9 191.935L1287.9 225.644Z" fill="#F9F8F7"/>
            <path d="M1227.68 225.644L1231.35 225.644L1231.35 191.935L1227.68 191.935L1227.68 225.644Z" fill="#F9F8F7"/>
            <path opacity="0.25" d="M1347.15 203.939C1347.15 203.939 1346.79 225.191 1452.33 231.786H1365.84H1357.78C1357.78 231.786 1347.52 231.786 1347.52 219.328L1347.15 203.939Z" fill="#97A393"/>
            <path opacity="0.4" d="M1347.15 218.229C1347.15 220.061 1347.15 216.031 1347.15 217.863C1346.42 231.053 1357.42 231.42 1357.42 231.42H1364.01H1549.82V236.55H1178.21C1173.08 236.183 1173.08 231.42 1173.08 231.42V218.229H1347.15Z" fill="#086608"/>
            <path opacity="0.2" d="M1172.86 218.057L1346.93 218.057L1346.93 203.767L1172.86 203.767L1172.86 218.057Z" fill="#086608"/>
            <path opacity="0.29" d="M1198 195.145H1243.44C1244.54 195.145 1245.27 194.412 1245.27 193.313V190.748C1245.27 189.649 1244.54 188.916 1243.44 188.916H1198C1196.9 188.916 1196.17 189.649 1196.17 190.748V193.313C1196.53 194.412 1197.26 195.145 1198 195.145Z" fill="#54E287"/>
            <path d="M435.688 75.7133L644.214 75.7133L644.214 70.5835L435.688 70.5835L435.688 75.7133Z" fill="#2B9C58"/>
            <path d="M435.688 126.387L644.214 126.387L644.214 121.257L435.688 121.257L435.688 126.387Z" fill="#2B9C58"/>
            <path d="M272.64 126.26H459.91V70.5649H272.64C269.708 70.5649 267.509 72.7634 267.509 75.6946V120.763C267.509 124.061 269.708 126.26 272.64 126.26Z" fill="#2B9C58"/>
            <path d="M452.581 121.13H627.024L626.292 115.267C624.826 103.908 624.826 92.916 626.292 81.5572L627.024 75.6946H452.581C446.351 75.6946 441.586 80.458 441.586 86.687V110.137C441.586 116.366 446.717 121.13 452.581 121.13Z" fill="#F9F8F7"/>
            <path d="M441.586 88.1527H625.559L625.925 84.4886H441.953L441.586 86.3206V88.1527Z" fill="#EDE5DD"/>
            <path d="M625.192 96.5801H441.586V100.244H625.192V96.5801Z" fill="#EDE5DD"/>
            <path d="M441.953 111.603H625.925L625.559 107.939H441.586L441.953 111.603Z" fill="#EDE5DD"/>
            <path d="M346.302 81.5573H362.06L370.123 98.4122L362.06 115.267H346.302L338.239 98.4122L346.302 81.5573Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M337.226 115.345L370.942 115.345L370.942 81.6349L337.226 81.6349L337.226 115.345Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M351.066 91.8168H357.296L360.595 98.4122L357.296 105.008H351.066L348.134 98.4122L351.066 91.8168Z" fill="#F9F8F7"/>
            <path d="M406.405 81.5573H422.163L430.226 98.4122L422.163 115.267H406.405L398.342 98.4122L406.405 81.5573Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M397.383 115.345L431.099 115.345L431.099 81.6349L397.383 81.6349L397.383 115.345Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M411.169 91.8168H417.399L420.698 98.4122L417.399 105.008H411.169L408.237 98.4122L411.169 91.8168Z" fill="#F9F8F7"/>
            <path d="M286.566 81.5573H302.691L310.387 98.4122L302.691 115.267H286.566L278.503 98.4122L286.566 81.5573Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M277.675 115.345L311.391 115.345L311.391 81.6349L277.675 81.6349L277.675 115.345Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M291.33 91.8168H297.56L300.859 98.4122L297.56 105.008H291.33L288.398 98.4122L291.33 91.8168Z" fill="#F9F8F7"/>
            <path d="M382.33 115.481L385.995 115.481L385.995 81.7713L382.33 81.7713L382.33 115.481Z" fill="#F9F8F7"/>
            <path d="M322.113 115.481L325.777 115.481L325.777 81.7713L322.113 81.7713L322.113 115.481Z" fill="#F9F8F7"/>
            <path opacity="0.25" d="M441.586 93.2824C441.586 93.2824 441.22 114.534 546.766 121.13H460.277H452.214C452.214 121.13 441.953 121.13 441.953 108.672L441.586 93.2824Z" fill="#97A393"/>
            <path opacity="0.4" d="M441.586 107.939C441.586 109.771 441.586 105.74 441.586 107.573C440.854 120.763 451.848 121.13 451.848 121.13H458.444H644.249V126.26H272.64C267.509 125.893 267.509 121.13 267.509 121.13V107.939H441.586Z" fill="#086608"/>
            <path opacity="0.2" d="M267.655 107.893L441.732 107.893L441.732 93.6034L267.655 93.6034L267.655 107.893Z" fill="#086608"/>
            <path opacity="0.29" d="M292.796 84.4885H338.24C339.339 84.4885 340.072 83.7557 340.072 82.6565V80.0916C340.072 78.9923 339.339 78.2595 338.24 78.2595H292.796C291.697 78.2595 290.964 78.9923 290.964 80.0916V82.6565C290.964 83.7557 291.697 84.4885 292.796 84.4885Z" fill="#54E287"/>
            <path d="M1060 237.081L1079.96 137.944L1055.17 132.956L1035.21 232.093L1060 237.081Z" fill="#FA5738"/>
            <path d="M1062.4 161.435L1061.3 150.809L1065.33 147.145L1067.53 151.908L1062.4 161.435Z" fill="#DB4633"/>
            <path d="M1062.77 161.435L1068.26 152.275L1073.39 151.542L1072.3 156.672L1062.77 161.435Z" fill="#DB4633"/>
            <path d="M1062.03 161.435L1060.57 150.809L1056.17 147.878L1055.07 153.008L1062.03 161.435Z" fill="#DB4633"/>
            <path d="M1069.98 167.689L1052.74 164.218L1050.28 176.431L1067.52 179.901L1069.98 167.689Z" fill="#DB4633"/>
            <path d="M1060.25 215.613L1043 212.143L1041.78 218.249L1059.02 221.719L1060.25 215.613Z" fill="#DB4633"/>
            <path opacity="0.3" d="M1051.77 169.13L1055.07 153.374C1055.07 153.008 1055.8 152.641 1056.17 152.641C1056.54 152.641 1056.9 153.374 1056.9 153.74L1053.61 169.496C1053.61 169.863 1052.87 170.229 1052.51 170.229C1052.14 170.229 1051.77 169.863 1051.77 169.13Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M1079.95 137.969L1072.04 136.379L1052.08 235.516L1059.99 237.107L1079.95 137.969Z" fill="#AD1905"/>
            <path opacity="0.3" d="M1071.94 136.106L1064.03 134.516L1044.08 233.653L1051.98 235.244L1071.94 136.106Z" fill="#C12110"/>
            <path d="M92.3569 182.159L92.3569 47.1658L58.9996 47.1658L58.9996 182.159H92.3569Z" fill="#FA5738"/>
            <path d="M75.587 82.5842L71.457 68.9261L75.587 63.2087L79.3993 68.9261L75.587 82.5842Z" fill="#DB4633"/>
            <path d="M75.9048 82.5842L80.6701 68.9261L87.0239 66.7026V73.6905L75.9048 82.5842Z" fill="#DB4633"/>
            <path d="M74.9516 82.5842L70.504 68.9261L63.8325 66.7026V73.6905L74.9516 82.5842Z" fill="#DB4633"/>
            <path d="M87.3415 88.6192H63.8325V105.136H87.3415V88.6192Z" fill="#DB4633"/>
            <path d="M87.3415 154.051H63.8325V162.31H87.3415V154.051Z" fill="#DB4633"/>
            <path opacity="0.3" d="M63.8325 95.6072V74.0082C63.8325 73.3729 64.4679 72.7377 65.1033 72.7377C65.7387 72.7377 66.374 73.3729 66.374 74.0082V95.6072C66.374 96.2424 65.7387 96.8777 65.1033 96.8777C64.4679 96.8777 63.8325 96.2424 63.8325 95.6072Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M92.4245 47.3271H81.623V182.321H92.4245V47.3271Z" fill="#AD1905"/>
            <path opacity="0.3" d="M81.6232 47.3271H70.8218V182.321H81.6232V47.3271Z" fill="#C12110"/>
            <path d="M1899.32 237.188V126.629H1872V237.188H1899.32Z" fill="#FA5738"/>
            <path d="M1885.59 155.637L1882.2 144.45L1885.59 139.768L1888.71 144.45L1885.59 155.637Z" fill="#DB4633"/>
            <path d="M1885.85 155.637L1889.75 144.45L1894.95 142.629V148.353L1885.85 155.637Z" fill="#DB4633"/>
            <path d="M1885.07 155.637L1881.42 144.45L1875.96 142.629V148.353L1885.07 155.637Z" fill="#DB4633"/>
            <path d="M1895.21 160.579H1875.96V174.106H1895.21V160.579Z" fill="#DB4633"/>
            <path d="M1895.21 214.168H1875.96V220.932H1895.21V214.168Z" fill="#DB4633"/>
            <path opacity="0.3" d="M1875.96 166.302V148.613C1875.96 148.092 1876.48 147.572 1877 147.572C1877.52 147.572 1878.04 148.092 1878.04 148.613V166.302C1878.04 166.823 1877.52 167.343 1877 167.343C1876.48 167.343 1875.96 166.823 1875.96 166.302Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M1899.38 126.761H1890.53V237.321H1899.38V126.761Z" fill="#AD1905"/>
            <path opacity="0.3" d="M1890.53 126.761H1881.68V237.321H1890.53V126.761Z" fill="#C12110"/>
            <path d="M1714.53 237.296V81.5704H1676.05V237.296H1714.53Z" fill="#FA5738"/>
            <path d="M1695.31 122.229L1690.54 106.473L1695.31 99.8779L1700.07 106.473L1695.31 122.229Z" fill="#DB4633"/>
            <path d="M1695.67 122.229L1701.17 106.473L1708.87 103.908V111.969L1695.67 122.229Z" fill="#DB4633"/>
            <path d="M1694.94 122.229L1689.45 106.473L1681.75 103.908V111.969L1694.94 122.229Z" fill="#DB4633"/>
            <path d="M1708.87 129.191H1681.75V148.244H1708.87V129.191Z" fill="#DB4633"/>
            <path d="M1708.87 204.672H1681.75V214.198H1708.87V204.672Z" fill="#DB4633"/>
            <path opacity="0.3" d="M1681.75 137.252V112.336C1681.75 111.603 1682.48 110.87 1683.22 110.87C1683.95 110.87 1684.68 111.603 1684.68 112.336V137.252C1684.68 137.985 1683.95 138.718 1683.22 138.718C1682.48 138.718 1681.75 137.985 1681.75 137.252Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M1714.73 81.5573H1702.27V237.282H1714.73V81.5573Z" fill="#AD1905"/>
            <path opacity="0.3" d="M1702.27 81.5573H1689.81V237.282H1702.27V81.5573Z" fill="#C12110"/>
            <path d="M1118.69 237.217V81.4917H1080.21V237.217H1118.69Z" fill="#2B9C58"/>
            <path d="M1099.42 122.229L1094.65 106.473L1099.42 99.8778L1104.18 106.473L1099.42 122.229Z" fill="#247F5C"/>
            <path d="M1100.15 122.229L1105.28 106.473L1112.97 103.908V111.969L1100.15 122.229Z" fill="#247F5C"/>
            <path d="M1099.05 122.229L1093.92 106.473L1086.22 103.908V111.969L1099.05 122.229Z" fill="#247F5C"/>
            <path d="M1113.34 129.191H1086.22V148.244H1113.34V129.191Z" fill="#247F5C"/>
            <path d="M1113.34 204.672H1086.22V214.198H1113.34V204.672Z" fill="#247F5C"/>
            <path opacity="0.29" d="M1086.22 137.252V112.336C1086.22 111.603 1086.95 110.87 1087.69 110.87C1088.42 110.87 1089.15 111.603 1089.15 112.336V137.252C1089.15 137.985 1088.42 138.718 1087.69 138.718C1086.59 138.718 1086.22 137.985 1086.22 137.252Z" fill="#54E287"/>
            <path opacity="0.4" d="M1118.84 81.5573H1106.38V237.282H1118.84V81.5573Z" fill="#086608"/>
            <path opacity="0.2" d="M1106.74 81.5573H1094.28V237.282H1106.74V81.5573Z" fill="#086608"/>
            <path d="M124.596 182.214L124.596 11.6454L92.1919 11.6454L92.1919 182.214H124.596Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M124.511 149.922H92.1069V162.31H124.511V149.922Z" fill="#086608"/>
            <path opacity="0.4" d="M124.511 38.7511H92.1069V51.1387H124.511V38.7511Z" fill="#086608"/>
            <path opacity="0.29" d="M96.2368 49.5506V28.2692C96.2368 27.634 96.8722 26.9987 97.5076 26.9987C98.1429 26.9987 98.7783 27.634 98.7783 28.2692V49.8682C98.7783 50.5035 98.1429 51.1387 97.5076 51.1387C96.8722 50.8211 96.2368 50.1858 96.2368 49.5506Z" fill="#54E287"/>
            <path opacity="0.4" d="M124.829 11.4348H114.027V182.003H124.829V11.4348Z" fill="#086608"/>
            <path opacity="0.2" d="M114.027 11.4348H103.226V182.003H114.027V11.4348Z" fill="#086608"/>
            <path d="M1925.72 237.233V97.5375H1899.18V237.233H1925.72Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M1925.65 210.786H1899.11V220.932H1925.65V210.786Z" fill="#086608"/>
            <path opacity="0.4" d="M1925.65 119.737H1899.11V129.883H1925.65V119.737Z" fill="#086608"/>
            <path opacity="0.29" d="M1902.5 128.582V111.152C1902.5 110.632 1903.02 110.112 1903.54 110.112C1904.06 110.112 1904.58 110.632 1904.58 111.152V128.842C1904.58 129.362 1904.06 129.883 1903.54 129.883C1903.02 129.622 1902.5 129.102 1902.5 128.582Z" fill="#54E287"/>
            <path opacity="0.4" d="M1925.91 97.3651H1917.07V237.06H1925.91V97.3651Z" fill="#086608"/>
            <path opacity="0.2" d="M1917.07 97.3651H1908.22V237.06H1917.07V97.3651Z" fill="#086608"/>
            <path d="M1156.3 237.331V40.5674L1118.92 40.5674V237.331H1156.3Z" fill="#FA5738"/>
            <path d="M1156.22 199.908H1118.84V214.198H1156.22V199.908Z" fill="#DB4633"/>
            <path d="M1156.22 71.6641H1118.84V85.9542H1156.22V71.6641Z" fill="#DB4633"/>
            <path opacity="0.3" d="M1123.6 84.1222V59.2061C1123.6 58.4733 1124.34 57.7405 1125.07 57.7405C1125.8 57.7405 1126.53 58.4733 1126.53 59.2061V84.1222C1126.53 84.855 1125.8 85.5878 1125.07 85.5878C1124.34 85.5878 1123.6 85.2214 1123.6 84.1222Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M1156.22 40.5191H1143.76V237.282H1156.22V40.5191Z" fill="#AD1905"/>
            <path opacity="0.3" d="M1144.13 40.5191H1131.67V237.282H1144.13V40.5191Z" fill="#C12110"/>
            <path d="M1752.13 237.043V40.2798L1714.75 40.2798V237.043H1752.13Z" fill="#FA5738"/>
            <path d="M1752.11 199.908H1714.73V214.198H1752.11V199.908Z" fill="#DB4633"/>
            <path d="M1752.11 71.6641H1714.73V85.9541H1752.11V71.6641Z" fill="#DB4633"/>
            <path opacity="0.3" d="M1719.5 84.1221V59.2061C1719.5 58.4732 1720.23 57.7404 1720.96 57.7404C1721.7 57.7404 1722.43 58.4732 1722.43 59.2061V84.1221C1722.43 84.8549 1721.7 85.5877 1720.96 85.5877C1719.86 85.5877 1719.5 85.2213 1719.5 84.1221Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M1752.11 40.519H1739.65V237.282H1752.11V40.519Z" fill="#AD1905"/>
            <path opacity="0.3" d="M1739.65 40.519H1727.19V237.282H1739.65V40.519Z" fill="#C12110"/>
            <path d="M1231.84 237.427V54.9539L1196.29 54.9539V237.427H1231.84Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M1231.23 105.902V71.8254H1196.78V105.902H1231.23Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M1225.12 105.741L1219.25 88.8856L1225.12 71.6642L1230.98 88.8856L1225.12 105.741Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1217.79 105.741L1211.92 88.8856L1217.79 71.6642L1223.65 88.8856L1217.79 105.741Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1210.09 105.741L1204.59 88.8856L1210.09 71.6642L1216.32 88.8856L1210.09 105.741Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1202.76 105.741L1196.9 88.8856L1202.76 71.6642L1208.63 88.8856L1202.76 105.741Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M1231.38 146.362V112.285H1196.93V146.362H1231.38Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M1225.12 146.412L1219.25 129.191L1225.12 112.336L1230.98 129.191L1225.12 146.412Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1217.79 146.412L1211.92 129.191L1217.79 112.336L1223.65 129.191L1217.79 146.412Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1210.09 146.412L1204.59 129.191L1210.09 112.336L1216.32 129.191L1210.09 146.412Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1202.76 146.412L1196.9 129.191L1202.76 112.336L1208.63 129.191L1202.76 146.412Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M1231.17 186.822V152.746H1196.72V186.822H1231.17Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M1225.12 186.718L1219.25 169.863L1225.12 152.641L1230.98 169.863L1225.12 186.718Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1217.79 186.718L1211.92 169.863L1217.79 152.641L1223.65 169.863L1217.79 186.718Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1210.09 186.718L1204.59 169.863L1210.09 152.641L1216.32 169.863L1210.09 186.718Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1202.76 186.718L1196.9 169.863L1202.76 152.641L1208.63 169.863L1202.76 186.718Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path opacity="0.2" d="M1231.71 202.107H1196.17V211.634H1231.71V202.107Z" fill="#086608"/>
            <path opacity="0.29" d="M1200.56 118.199V93.2825C1200.56 92.5496 1201.3 91.8168 1202.03 91.8168C1202.76 91.8168 1203.49 92.5496 1203.49 93.2825V118.199C1203.49 118.931 1202.76 119.664 1202.03 119.664C1201.3 119.664 1200.56 118.931 1200.56 118.199Z" fill="#54E287"/>
            <path opacity="0.4" d="M1232.08 54.8092H1219.62V237.282H1232.08V54.8092Z" fill="#086608"/>
            <path opacity="0.2" d="M1219.62 54.8092H1207.16V237.282H1219.62V54.8092Z" fill="#086608"/>
            <path d="M1789.27 234.861L1779.3 94.1448L1751.88 96.0863L1761.85 236.802L1789.27 234.861Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M1781.72 133.635L1779.85 107.319L1753.17 109.209L1755.03 135.524L1781.72 133.635Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M1777.03 133.954L1771.9 121.13L1775.2 107.573L1780.7 120.397L1777.03 133.954Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1771.54 134.321L1766.04 121.496L1769.7 107.939L1775.2 120.763L1771.54 134.321Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1765.67 134.687L1760.18 121.863L1763.84 108.672L1769.34 121.496L1765.67 134.687Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1759.81 135.053L1754.31 122.229L1757.98 109.038L1763.47 121.863L1759.81 135.053Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M1783.97 164.814L1782.11 138.498L1755.42 140.388L1757.29 166.703L1783.97 164.814Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M1779.23 165.099L1774.1 152.275L1777.4 138.718L1782.9 151.542L1779.23 165.099Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1773.73 165.466L1768.24 152.641L1771.9 139.45L1777.4 152.275L1773.73 165.466Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1767.87 165.832L1762.37 153.008L1766.04 139.817L1771.54 152.641L1767.87 165.832Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1762.01 166.198L1756.51 153.374L1760.18 140.183L1765.67 153.008L1762.01 166.198Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M1786.23 195.992L1784.37 169.677L1757.68 171.566L1759.54 197.882L1786.23 195.992Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M1781.43 196.244L1776.3 183.42L1779.6 170.229L1785.1 183.053L1781.43 196.244Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1775.93 196.611L1770.44 183.786L1774.1 170.595L1779.6 183.42L1775.93 196.611Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1770.07 196.977L1764.57 184.519L1768.24 170.962L1773.74 183.786L1770.07 196.977Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1764.21 197.71L1758.71 184.886L1762.37 171.328L1767.87 184.153L1764.21 197.71Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
                <path opacity="0.2" d="M1787.38 208.114L1759.96 210.055L1760.48 217.365L1787.89 215.424L1787.38 208.114Z" fill="#086608"/>
                <path opacity="0.29" d="M1758.71 144.947L1757.24 125.893C1757.24 125.16 1757.61 124.794 1758.34 124.794C1759.08 124.794 1759.44 125.16 1759.44 125.893L1760.91 144.947C1760.91 145.679 1760.54 146.046 1759.81 146.046C1759.44 146.046 1759.08 145.313 1758.71 144.947Z" fill="#54E287"/>
                <path opacity="0.4" d="M1779.37 94.2269L1769.86 94.8999L1779.83 235.616L1789.33 234.943L1779.37 94.2269Z" fill="#086608"/>
                <path opacity="0.2" d="M1769.84 94.9626L1760.34 95.6357L1770.31 236.352L1779.81 235.679L1769.84 94.9626Z" fill="#086608"/>
                <path d="M190.08 182.297L190.08 24.1165L159.264 24.1165L159.264 182.297H190.08Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M189.546 68.2813V38.7416L159.683 38.7416V68.2813H189.546Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M184.237 68.2908L179.471 53.6798L184.237 38.7511L189.32 53.6798L184.237 68.2908Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M177.883 68.2908L172.8 53.6798L177.883 38.7511L182.966 53.6798L177.883 68.2908Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M171.529 68.2908L166.446 53.6798L171.529 38.7511L176.612 53.6798L171.529 68.2908Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M164.857 68.2908L159.774 53.6798L164.857 38.7511L169.94 53.6798L164.857 68.2908Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M189.68 103.355V73.8154H159.817V103.355H189.68Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M184.237 103.23L179.471 88.6192L184.237 73.6906L189.32 88.6192L184.237 103.23Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M177.882 103.23L172.799 88.6192L177.882 73.6906L182.965 88.6192L177.882 103.23Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M171.529 103.23L166.446 88.6192L171.529 73.6906L176.612 88.6192L171.529 103.23Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M164.857 103.23L159.774 88.6192L164.857 73.6906L169.94 88.6192L164.857 103.23Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M189.815 138.429V108.889H159.952V138.429H189.815Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M184.237 138.487L179.471 123.559L184.237 108.948L189.32 123.559L184.237 138.487Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M177.882 138.487L172.799 123.559L177.882 108.948L182.965 123.559L177.882 138.487Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M171.529 138.487L166.446 123.559L171.529 108.948L176.612 123.559L171.529 138.487Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M164.857 138.487L159.774 123.559L164.857 108.948L169.94 123.559L164.857 138.487Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path opacity="0.2" d="M189.955 151.828H159.139V160.086H189.955V151.828Z" fill="#086608"/>
            <path opacity="0.29" d="M162.952 79.0903V57.4914C162.952 56.8561 163.587 56.2208 164.222 56.2208C164.858 56.2208 165.493 56.8561 165.493 57.4914V79.0903C165.493 79.7256 164.858 80.3608 164.222 80.3608C163.587 80.3608 162.952 79.7256 162.952 79.0903Z" fill="#54E287"/>
            <path opacity="0.4" d="M190.273 24.14H179.471V182.321H190.273V24.14Z" fill="#086608"/>
            <path opacity="0.2" d="M179.471 24.14H168.669V182.321H179.471V24.14Z" fill="#086608"/>
            <path d="M159.275 182.01L159.275 0.00732422L124.647 0.00732422L124.647 182.01H159.275Z" fill="#FA5738"/>
            <path d="M133.089 0V182.003" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M139.125 0V182.003" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M144.843 0V182.003" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M150.562 0V182.003" stroke="#DB4633" strokeMiterlimit="10"/>
            <path opacity="0.3" d="M130.547 43.8332V22.2342C130.547 21.5989 131.183 20.9637 131.818 20.9637C132.454 20.9637 133.089 21.5989 133.089 22.2342V43.8332C133.089 44.4684 132.454 45.1037 131.818 45.1037C131.183 45.1037 130.547 44.4684 130.547 43.8332Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M159.139 0H148.338V182.003H159.139V0Z" fill="#AD1905"/>
            <path opacity="0.3" d="M148.655 0H137.854V182.003H148.655V0Z" fill="#C12110"/>
            <path d="M1675.97 239.037V63L1639 63V239.037H1675.97Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M1647.91 63.1365V239.173" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M1654.36 63.1365V239.173" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M1660.46 63.1365V239.173" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M1666.91 63.1365V239.173" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.29" d="M1645.2 105.225V84.3346C1645.2 83.7201 1645.88 83.1057 1646.56 83.1057C1647.24 83.1057 1647.91 83.7201 1647.91 84.3346V105.225C1647.91 105.84 1647.24 106.454 1646.56 106.454C1645.88 106.762 1645.2 106.147 1645.2 105.225Z" fill="#54E287"/>
            <path opacity="0.4" d="M1676.06 63.1365H1664.53V239.173H1676.06V63.1365Z" fill="#086608"/>
            <path opacity="0.2" d="M1664.53 63.1365H1653V239.173H1664.53V63.1365Z" fill="#086608"/>
            <path d="M1195.94 237.096V27.1422L1155.99 27.1422V237.096H1195.94Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M1166.11 26.9619V237.282" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M1173.08 26.9619V237.282" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M1179.67 26.9619V237.282" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M1186.27 26.9619V237.282" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.29" d="M1163.18 77.5268V52.6107C1163.18 51.8779 1163.92 51.1451 1164.65 51.1451C1165.38 51.1451 1166.11 51.8779 1166.11 52.6107V77.5268C1166.11 78.2596 1165.38 78.9924 1164.65 78.9924C1163.92 78.9924 1163.18 78.2596 1163.18 77.5268Z" fill="#54E287"/>
            <path opacity="0.4" d="M1196.17 26.9619H1183.71V236.916H1196.17V26.9619Z" fill="#086608"/>
            <path opacity="0.2" d="M1183.7 26.9619H1171.24V236.916H1183.7V26.9619Z" fill="#086608"/>
            <path d="M203.164 187.372L411.69 187.372L411.69 182.242L203.164 182.242L203.164 187.372Z" fill="#2B9C58"/>
            <path d="M203.164 237.679L411.69 237.679L411.69 232.549L203.164 232.549L203.164 237.679Z" fill="#2B9C58"/>
            <path d="M40.1307 238.015H227.401V181.954H40.1307C37.1989 181.954 35 184.519 35 187.45V232.519C35 235.45 37.1989 238.015 40.1307 238.015Z" fill="#2B9C58"/>
            <path d="M220.071 232.886H394.515L393.782 227.023C392.316 215.664 392.316 204.672 393.782 193.313L394.515 187.45H220.071C213.841 187.45 209.077 192.214 209.077 198.443V221.893C209.077 227.756 214.208 232.886 220.071 232.886Z" fill="#F9F8F7"/>
            <path d="M209.077 199.542H393.049L393.416 195.878H209.444L209.077 197.71V199.542Z" fill="#EDE5DD"/>
            <path d="M392.683 207.969H209.077V211.634H392.683V207.969Z" fill="#EDE5DD"/>
            <path d="M209.444 223.359H393.416L393.049 219.695H209.077L209.444 223.359Z" fill="#EDE5DD"/>
            <path d="M166.566 210.168L190.753 217.13L200.648 210.168L190.753 202.84L166.566 210.168Z" fill="#247F5C"/>
            <path d="M166.566 209.435L190.387 201.008L194.418 189.282H181.958L166.566 209.435Z" fill="#247F5C"/>
            <path d="M166.566 210.534L190.387 218.962L194.418 230.687H181.958L166.566 210.534Z" fill="#247F5C"/>
            <path d="M131.37 230.663L157.39 230.663L157.39 189.624L131.37 189.624L131.37 230.663Z" fill="#247F5C"/>
            <path d="M81.0584 230.663L91.3198 230.663L91.3198 189.624L81.0584 189.624L81.0584 230.663Z" fill="#247F5C"/>
            <path d="M50.1835 230.663L50.9165 230.663L50.9165 189.624L50.1835 189.624L50.1835 230.663Z" fill="#247F5C"/>
            <path d="M228.867 209.435H232.165H235.464H238.396V244.611L233.631 237.649L228.867 244.611V209.435Z" fill="#FA5738"/>
            <path opacity="0.25" d="M228.867 232.519H227.401H219.339C219.339 232.519 209.077 232.519 209.077 220.061V204.672C209.077 204.672 209.077 211.634 228.867 218.962" fill="#97A393"/>
            <path opacity="0.25" d="M238.396 222.26C253.788 226.657 277.609 230.687 314.257 232.886H238.396" fill="#97A393"/>
            <path opacity="0.4" d="M228.867 237.649H40.1307C35.3665 237.649 35 232.519 35 232.519V219.328H209.077C209.077 221.16 209.077 217.13 209.077 218.962C208.344 232.153 219.339 232.519 219.339 232.519H225.935H228.867" fill="#086608"/>
            <path opacity="0.4" d="M238.396 232.519H411.74V237.649H238.396" fill="#086608"/>
            <path opacity="0.2" d="M35.1303 219.185L209.208 219.185L209.208 204.895L35.1303 204.895L35.1303 219.185Z" fill="#086608"/>
            <path opacity="0.29" d="M60.287 193.313H105.73C106.83 193.313 107.563 192.58 107.563 191.481V188.916C107.563 187.817 106.83 187.084 105.73 187.084H60.287C59.1875 187.084 58.4546 187.817 58.4546 188.916V191.481C58.4546 192.58 59.1875 193.313 60.287 193.313Z" fill="#54E287"/>
            <path d="M22.2426 348.695H-165.028V293H22.2426C25.1744 293 27.3733 295.198 27.3733 298.13V343.198C27.7398 346.13 25.1744 348.695 22.2426 348.695Z" fill="#2B9C58"/>
            <path d="M14.9131 301.794H-19.1694V339.534H14.9131V301.794Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M14.9131 308.756L-1.94493 314.985L-19.1694 308.756L-1.94493 302.16L14.9131 308.756Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9131 316.817L-1.94493 323.046L-19.1694 316.817L-1.94493 310.221L14.9131 316.817Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9131 324.878L-1.94493 331.107L-19.1694 324.878L-1.94493 318.282L14.9131 324.878Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9131 332.939L-1.94493 339.534L-19.1694 332.939L-1.94493 326.71L14.9131 332.939Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.4" d="M-146.704 330.374C-146.704 332.206 -146.704 328.176 -146.704 330.008C-145.971 343.198 -156.965 343.565 -156.965 343.565H-163.562H-349V348.695H22.2426C27.3733 348.328 27.3733 343.565 27.3733 343.565V330.374H-146.704Z" fill="#086608"/>
            <path opacity="0.2" d="M27.3731 315.718H-146.704V330.008H27.3731V315.718Z" fill="#086608"/>
        </svg>
    )
}
