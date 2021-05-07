import * as React from 'react';

const Speedometer = ({ isInCar, colors }) => {
    return <div
        className='hud-speedometer__image'
        style={isInCar ? {transition: 'transform 1s ease .5s'} : {transition: 'transform 1s ease .3s'}}
    >
        <svg width="747" height="759" viewBox="0 0 747 759" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M377.5 379.1H374.7V745.2H377.5V379.1Z" fill="url(#paint0_linear)"/>
            <path d="M374.7 379.1L377.5 379.2L371.1 745.2H368.3L374.7 379.1Z" fill="url(#paint1_linear)"/>
            <path d="M374.7 379.1L377.5 379.2L364.8 745.1L361.9 745L374.7 379.1Z" fill="url(#paint2_linear)"/>
            <path d="M374.7 379.1L377.5 379.2L358.4 744.8L355.6 744.7L374.7 379.1Z" fill="url(#paint3_linear)"/>
            <path d="M374.7 379L377.5 379.2L352 744.5L349.2 744.3L374.7 379Z" fill="url(#paint4_linear)"/>
            <path d="M374.7 379L377.5 379.3L345.6 744L342.8 743.7L374.7 379Z" fill="url(#paint5_linear)"/>
            <path d="M374.7 379L377.5 379.3L339.3 743.4L336.5 743.1L374.7 379Z" fill="url(#paint6_linear)"/>
            <path d="M374.7 379L377.5 379.3L332.9 742.7L330.1 742.4L374.7 379Z" fill="url(#paint7_linear)"/>
            <path d="M374.7 378.9L377.5 379.3L326.6 741.9L323.8 741.5L374.7 378.9Z" fill="url(#paint8_linear)"/>
            <path d="M374.7 378.9L377.5 379.3L320.2 741L317.5 740.5L374.7 378.9Z" fill="url(#paint9_linear)"/>
            <path d="M374.7 378.9L377.5 379.4L313.9 739.9L311.2 739.4L374.7 378.9Z" fill="url(#paint10_linear)"/>
            <path d="M374.7 378.9L377.5 379.4L307.6 738.8L304.9 738.3L374.7 378.9Z" fill="url(#paint11_linear)"/>
            <path d="M374.8 378.8L377.5 379.4L301.4 737.5L298.6 737L374.8 378.8Z" fill="url(#paint12_linear)"/>
            <path d="M374.8 378.8L377.5 379.4L295.1 736.2L292.4 735.6L374.8 378.8Z" fill="url(#paint13_linear)"/>
            <path d="M374.8 378.8L377.5 379.5L288.9 734.7L286.2 734L374.8 378.8Z" fill="url(#paint14_linear)"/>
            <path d="M374.8 378.8L377.5 379.5L282.7 733.1L280 732.4L374.8 378.8Z" fill="url(#paint15_linear)"/>
            <path d="M374.8 378.7L377.5 379.5L276.6 731.5L273.9 730.7L374.8 378.7Z" fill="url(#paint16_linear)"/>
            <path d="M374.8 378.7L377.5 379.5L270.4 729.7L267.7 728.8L374.8 378.7Z" fill="url(#paint17_linear)"/>
            <path d="M374.8 378.7L377.5 379.6L264.3 727.8L261.7 726.9L374.8 378.7Z" fill="url(#paint18_linear)"/>
            <path d="M374.8 378.7L377.5 379.6L258.3 725.8L255.6 724.9L374.8 378.7Z" fill="url(#paint19_linear)"/>
            <path d="M374.8 378.6L377.4 379.6L252.2 723.7L249.6 722.7L374.8 378.6Z" fill="url(#paint20_linear)"/>
            <path d="M374.8 378.6L377.4 379.6L246.2 721.4L243.6 720.4L374.8 378.6Z" fill="url(#paint21_linear)"/>
            <path d="M374.8 378.6L377.4 379.7L240.3 719.1L237.7 718.1L374.8 378.6Z" fill="url(#paint22_linear)"/>
            <path d="M374.8 378.6L377.4 379.7L234.4 716.7L231.8 715.6L374.8 378.6Z" fill="url(#paint23_linear)"/>
            <path d="M374.8 378.6L377.4 379.7L228.5 714.2L225.9 713L374.8 378.6Z" fill="url(#paint24_linear)"/>
            <path d="M374.9 378.5L377.4 379.7L222.7 711.5L220.1 710.4L374.9 378.5Z" fill="url(#paint25_linear)"/>
            <path d="M374.9 378.5L377.4 379.7L216.9 708.8L214.4 707.6L374.9 378.5Z" fill="url(#paint26_linear)"/>
            <path d="M374.9 378.5L377.4 379.8L211.2 706L208.7 704.7L374.9 378.5Z" fill="url(#paint27_linear)"/>
            <path d="M374.9 378.5L377.4 379.8L205.5 703.1L203 701.7L374.9 378.5Z" fill="url(#paint28_linear)"/>
            <path d="M374.9 378.4L377.4 379.8L199.9 700L197.4 698.7L374.9 378.4Z" fill="url(#paint29_linear)"/>
            <path d="M374.9 378.4L377.3 379.8L194.3 696.9L191.8 695.5L374.9 378.4Z" fill="url(#paint30_linear)"/>
            <path d="M374.9 378.4L377.3 379.9L188.8 693.7L186.4 692.2L374.9 378.4Z" fill="url(#paint31_linear)"/>
            <path d="M374.9 378.4L377.3 379.9L183.3 690.4L180.9 688.9L374.9 378.4Z" fill="url(#paint32_linear)"/>
            <path d="M374.9 378.4L377.3 379.9L177.9 687L175.5 685.4L374.9 378.4Z" fill="url(#paint33_linear)"/>
            <path d="M375 378.3L377.3 379.9L172.6 683.4L170.2 681.9L375 378.3Z" fill="url(#paint34_linear)"/>
            <path d="M375 378.3L377.3 379.9L167.3 679.8L165 678.2L375 378.3Z" fill="url(#paint35_linear)"/>
            <path d="M375 378.3L377.3 380L162.1 676.2L159.8 674.5L375 378.3Z" fill="url(#paint36_linear)"/>
            <path d="M375 378.3L377.2 380L156.9 672.4L154.7 670.7L375 378.3Z" fill="url(#paint37_linear)"/>
            <path d="M375 378.3L377.2 380L151.8 668.5L149.6 666.8L375 378.3Z" fill="url(#paint38_linear)"/>
            <path d="M375 378.2L377.2 380L146.8 664.5L144.6 662.8L375 378.2Z" fill="url(#paint39_linear)"/>
            <path d="M375.1 378.2L377.2 380L141.9 660.5L139.7 658.7L375.1 378.2Z" fill="url(#paint40_linear)"/>
            <path d="M375.1 378.2L377.2 380L137 656.4L134.9 654.5L375.1 378.2Z" fill="url(#paint41_linear)"/>
            <path d="M375.1 378.2L377.2 380.1L132.2 652.2L130.1 650.3L375.1 378.2Z" fill="url(#paint42_linear)"/>
            <path d="M375.1 378.2L377.2 380.1L127.5 647.9L125.4 645.9L375.1 378.2Z" fill="url(#paint43_linear)"/>
            <path d="M375.1 378.2L377.1 380.1L122.8 643.5L120.8 641.5L375.1 378.2Z" fill="url(#paint44_linear)"/>
            <path d="M375.1 378.1L377.1 380.1L118.2 639L116.2 637L375.1 378.1Z" fill="url(#paint45_linear)"/>
            <path d="M375.2 378.1L377.1 380.1L113.7 634.5L111.8 632.5L375.2 378.1Z" fill="url(#paint46_linear)"/>
            <path d="M375.2 378.1L377.1 380.2L109.3 629.9L107.4 627.8L375.2 378.1Z" fill="url(#paint47_linear)"/>
            <path d="M375.2 378.1L377.1 380.2L105 625.2L103.1 623.1L375.2 378.1Z" fill="url(#paint48_linear)"/>
            <path d="M375.2 378.1L377 380.2L100.7 620.4L98.9 618.3L375.2 378.1Z" fill="url(#paint49_linear)"/>
            <path d="M375.2 378.1L377 380.2L96.6 615.5L94.8 613.4L375.2 378.1Z" fill="url(#paint50_linear)"/>
            <path d="M375.2 378L377 380.2L92.5 610.6L90.7 608.4L375.2 378Z" fill="url(#paint51_linear)"/>
            <path d="M375.3 378L377 380.2L88.5 605.6L86.8 603.4L375.3 378Z" fill="url(#paint52_linear)"/>
            <path d="M375.3 378L377 380.2L84.6 600.6L82.9 598.3L375.3 378Z" fill="url(#paint53_linear)"/>
            <path d="M375.3 378L377 380.3L80.7 595.5L79.1 593.2L375.3 378Z" fill="url(#paint54_linear)"/>
            <path d="M375.3 378L376.9 380.3L77 590.3L75.4 588L375.3 378Z" fill="url(#paint55_linear)"/>
            <path d="M375.3 378L376.9 380.3L73.4 585L71.8 582.7L375.3 378Z" fill="url(#paint56_linear)"/>
            <path d="M375.4 377.9L376.9 380.3L69.8 579.7L68.3 577.4L375.4 377.9Z" fill="url(#paint57_linear)"/>
            <path d="M375.4 377.9L376.9 380.3L66.4 574.3L64.9 572L375.4 377.9Z" fill="url(#paint58_linear)"/>
            <path d="M375.4 377.9L376.9 380.3L63 568.9L61.6 566.5L375.4 377.9Z" fill="url(#paint59_linear)"/>
            <path d="M375.4 377.9L376.8 380.3L59.8 563.4L58.3 561L375.4 377.9Z" fill="url(#paint60_linear)"/>
            <path d="M375.4 377.9L376.8 380.4L56.6 557.9L55.2 555.4L375.4 377.9Z" fill="url(#paint61_linear)"/>
            <path d="M375.5 377.9L376.8 380.4L53.5 552.3L52.2 549.8L375.5 377.9Z" fill="url(#paint62_linear)"/>
            <path d="M375.5 377.9L376.8 380.4L50.5 546.6L49.3 544.1L375.5 377.9Z" fill="url(#paint63_linear)"/>
            <path d="M375.5 377.9L376.7 380.4L47.7 540.9L46.4 538.4L375.5 377.9Z" fill="url(#paint64_linear)"/>
            <path d="M375.5 377.9L376.7 380.4L44.9 535.1L43.7 532.6L375.5 377.9Z" fill="url(#paint65_linear)"/>
            <path d="M375.6 377.8L376.7 380.4L42.2 529.3L41.1 526.8L375.6 377.8Z" fill="url(#paint66_linear)"/>
            <path d="M375.6 377.8L376.7 380.4L39.7 523.5L38.6 520.9L375.6 377.8Z" fill="url(#paint67_linear)"/>
            <path d="M375.6 377.8L376.7 380.4L37.2 517.6L36.1 515L375.6 377.8Z" fill="url(#paint68_linear)"/>
            <path d="M375.6 377.8L376.6 380.4L34.8 511.6L33.8 509L375.6 377.8Z" fill="url(#paint69_linear)"/>
            <path d="M375.6 377.8L376.6 380.4L32.6 505.7L31.6 503L375.6 377.8Z" fill="url(#paint70_linear)"/>
            <path d="M375.7 377.8L376.6 380.5L30.4 499.7L29.5 497L375.7 377.8Z" fill="url(#paint71_linear)"/>
            <path d="M375.7 377.8L376.6 380.5L28.4 493.6L27.5 490.9L375.7 377.8Z" fill="url(#paint72_linear)"/>
            <path d="M375.7 377.8L376.5 380.5L26.4 487.5L25.6 484.8L375.7 377.8Z" fill="url(#paint73_linear)"/>
            <path d="M375.7 377.8L376.5 380.5L24.6 481.4L23.8 478.7L375.7 377.8Z" fill="url(#paint74_linear)"/>
            <path d="M375.8 377.8L376.5 380.5L22.8 475.2L22.1 472.5L375.8 377.8Z" fill="url(#paint75_linear)"/>
            <path d="M375.8 377.8L376.5 380.5L21.2 469.1L20.5 466.3L375.8 377.8Z" fill="url(#paint76_linear)"/>
            <path d="M375.8 377.8L376.4 380.5L19.7 462.9L19.1 460.1L375.8 377.8Z" fill="url(#paint77_linear)"/>
            <path d="M375.8 377.8L376.4 380.5L18.3 456.6L17.7 453.9L375.8 377.8Z" fill="url(#paint78_linear)"/>
            <path d="M375.9 377.7L376.4 380.5L17 450.4L16.5 447.6L375.9 377.7Z" fill="url(#paint79_linear)"/>
            <path d="M375.9 377.7L376.4 380.5L15.8 444.1L15.3 441.3L375.9 377.7Z" fill="url(#paint80_linear)"/>
            <path d="M375.9 377.7L376.3 380.5L14.7 437.8L14.3 435L375.9 377.7Z" fill="url(#paint81_linear)"/>
            <path d="M375.9 377.7L376.3 380.5L13.8 431.5L13.4 428.7L375.9 377.7Z" fill="url(#paint82_linear)"/>
            <path d="M376 377.7L376.3 380.5L12.9 425.1L12.6 422.4L376 377.7Z" fill="url(#paint83_linear)"/>
            <path d="M376 377.7L376.3 380.5L12.2 418.8L11.9 416L376 377.7Z" fill="url(#paint84_linear)"/>
            <path d="M376 377.7L376.3 380.5L11.5 412.4L11.3 409.6L376 377.7Z" fill="url(#paint85_linear)"/>
            <path d="M376 377.7L376.2 380.5L11 406.1L10.8 403.3L376 377.7Z" fill="url(#paint86_linear)"/>
            <path d="M376.1 377.7L376.2 380.5L10.6 399.7L10.4 396.9L376.1 377.7Z" fill="url(#paint87_linear)"/>
            <path d="M376.1 377.7L376.2 380.5L10.3 393.3L10.2 390.5L376.1 377.7Z" fill="url(#paint88_linear)"/>
            <path d="M376.1 377.7L376.2 380.5L10.1 386.9L10 384.1L376.1 377.7Z" fill="url(#paint89_linear)"/>
            <path d="M376.1 377.7H10V380.5H376.1V377.7Z" fill="url(#paint90_linear)"/>
            <path d="M376.2 377.7L376.1 380.5L10 374.1L10.1 371.3L376.2 377.7Z" fill="url(#paint91_linear)"/>
            <path d="M376.2 377.7L376.1 380.5L10.2 367.8L10.3 364.9L376.2 377.7Z" fill="url(#paint92_linear)"/>
            <path d="M376.2 377.7L376.1 380.5L10.4 361.4L10.6 358.6L376.2 377.7Z" fill="url(#paint93_linear)"/>
            <path d="M376.2 377.7L376 380.5L10.8 355L11 352.2L376.2 377.7Z" fill="url(#paint94_linear)"/>
            <path d="M376.3 377.7L376 380.5L11.3 348.6L11.5 345.8L376.3 377.7Z" fill="url(#paint95_linear)"/>
            <path d="M376.3 377.7L376 380.5L11.9 342.3L12.2 339.5L376.3 377.7Z" fill="url(#paint96_linear)"/>
            <path d="M376.3 377.7L376 380.5L12.6 335.9L12.9 333.1L376.3 377.7Z" fill="url(#paint97_linear)"/>
            <path d="M376.3 377.7L375.9 380.5L13.4 329.6L13.8 326.8L376.3 377.7Z" fill="url(#paint98_linear)"/>
            <path d="M376.3 377.7L375.9 380.5L14.3 323.2L14.7 320.5L376.3 377.7Z" fill="url(#paint99_linear)"/>
            <path d="M376.4 377.7L375.9 380.5L15.3 316.9L15.8 314.2L376.4 377.7Z" fill="url(#paint100_linear)"/>
            <path d="M376.4 377.7L375.9 380.5L16.5 310.6L17 307.9L376.4 377.7Z" fill="url(#paint101_linear)"/>
            <path d="M376.4 377.8L375.8 380.5L17.7 304.4L18.3 301.6L376.4 377.8Z" fill="url(#paint102_linear)"/>
            <path d="M376.4 377.8L375.8 380.5L19.1 298.1L19.7 295.4L376.4 377.8Z" fill="url(#paint103_linear)"/>
            <path d="M376.5 377.8L375.8 380.5L20.5 291.9L21.2 289.2L376.5 377.8Z" fill="url(#paint104_linear)"/>
            <path d="M376.5 377.8L375.8 380.5L22.1 285.7L22.8 283L376.5 377.8Z" fill="url(#paint105_linear)"/>
            <path d="M376.5 377.8L375.7 380.5L23.8 279.6L24.6 276.9L376.5 377.8Z" fill="url(#paint106_linear)"/>
            <path d="M376.5 377.8L375.7 380.5L25.6 273.4L26.4 270.7L376.5 377.8Z" fill="url(#paint107_linear)"/>
            <path d="M376.6 377.8L375.7 380.5L27.5 267.3L28.4 264.7L376.6 377.8Z" fill="url(#paint108_linear)"/>
            <path d="M376.6 377.8L375.7 380.5L29.5 261.3L30.4 258.6L376.6 377.8Z" fill="url(#paint109_linear)"/>
            <path d="M376.6 377.8L375.6 380.4L31.6 255.2L32.6 252.6L376.6 377.8Z" fill="url(#paint110_linear)"/>
            <path d="M376.6 377.8L375.6 380.4L33.8 249.2L34.8 246.6L376.6 377.8Z" fill="url(#paint111_linear)"/>
            <path d="M376.7 377.8L375.6 380.4L36.1 243.3L37.2 240.7L376.7 377.8Z" fill="url(#paint112_linear)"/>
            <path d="M376.7 377.8L375.6 380.4L38.6 237.4L39.7 234.8L376.7 377.8Z" fill="url(#paint113_linear)"/>
            <path d="M376.7 377.8L375.6 380.4L41.1 231.5L42.2 228.9L376.7 377.8Z" fill="url(#paint114_linear)"/>
            <path d="M376.7 377.9L375.5 380.4L43.7 225.7L44.9 223.1L376.7 377.9Z" fill="url(#paint115_linear)"/>
            <path d="M376.7 377.9L375.5 380.4L46.4 219.9L47.7 217.4L376.7 377.9Z" fill="url(#paint116_linear)"/>
            <path d="M376.8 377.9L375.5 380.4L49.3 214.2L50.5 211.7L376.8 377.9Z" fill="url(#paint117_linear)"/>
            <path d="M376.8 377.9L375.5 380.4L52.2 208.5L53.5 206L376.8 377.9Z" fill="url(#paint118_linear)"/>
            <path d="M376.8 377.9L375.4 380.4L55.2 202.9L56.6 200.4L376.8 377.9Z" fill="url(#paint119_linear)"/>
            <path d="M376.8 377.9L375.4 380.3L58.3 197.3L59.8 194.8L376.8 377.9Z" fill="url(#paint120_linear)"/>
            <path d="M376.9 377.9L375.4 380.3L61.6 191.8L63 189.4L376.9 377.9Z" fill="url(#paint121_linear)"/>
            <path d="M376.9 377.9L375.4 380.3L64.9 186.3L66.4 183.9L376.9 377.9Z" fill="url(#paint122_linear)"/>
            <path d="M376.9 377.9L375.4 380.3L68.3 180.9L69.8 178.5L376.9 377.9Z" fill="url(#paint123_linear)"/>
            <path d="M376.9 378L375.3 380.3L71.8 175.6L73.4 173.2L376.9 378Z" fill="url(#paint124_linear)"/>
            <path d="M376.9 378L375.3 380.3L75.4 170.3L77 168L376.9 378Z" fill="url(#paint125_linear)"/>
            <path d="M377 378L375.3 380.3L79.1 165.1L80.7 162.8L377 378Z" fill="url(#paint126_linear)"/>
            <path d="M377 378L375.3 380.2L82.9 159.9L84.6 157.7L377 378Z" fill="url(#paint127_linear)"/>
            <path d="M377 378L375.3 380.2L86.8 154.8L88.5 152.6L377 378Z" fill="url(#paint128_linear)"/>
            <path d="M377 378L375.2 380.2L90.7 149.8L92.5 147.6L377 378Z" fill="url(#paint129_linear)"/>
            <path d="M377 378.1L375.2 380.2L94.8 144.9L96.6 142.7L377 378.1Z" fill="url(#paint130_linear)"/>
            <path d="M377 378.1L375.2 380.2L98.9 140L100.7 137.9L377 378.1Z" fill="url(#paint131_linear)"/>
            <path d="M377.1 378.1L375.2 380.2L103.1 135.2L105 133.1L377.1 378.1Z" fill="url(#paint132_linear)"/>
            <path d="M377.1 378.1L375.2 380.2L107.4 130.5L109.3 128.4L377.1 378.1Z" fill="url(#paint133_linear)"/>
            <path d="M377.1 378.1L375.2 380.1L111.8 125.8L113.7 123.8L377.1 378.1Z" fill="url(#paint134_linear)"/>
            <path d="M377.1 378.1L375.1 380.1L116.2 121.2L118.2 119.2L377.1 378.1Z" fill="url(#paint135_linear)"/>
            <path d="M377.1 378.2L375.1 380.1L120.8 116.7L122.8 114.8L377.1 378.2Z" fill="url(#paint136_linear)"/>
            <path d="M377.2 378.2L375.1 380.1L125.4 112.3L127.5 110.4L377.2 378.2Z" fill="url(#paint137_linear)"/>
            <path d="M377.2 378.2L375.1 380.1L130.1 108L132.2 106.1L377.2 378.2Z" fill="url(#paint138_linear)"/>
            <path d="M377.2 378.2L375.1 380L134.9 103.7L137 101.9L377.2 378.2Z" fill="url(#paint139_linear)"/>
            <path d="M377.2 378.2L375.1 380L139.7 99.6L141.9 97.8L377.2 378.2Z" fill="url(#paint140_linear)"/>
            <path d="M377.2 378.2L375 380L144.6 95.5L146.8 93.7L377.2 378.2Z" fill="url(#paint141_linear)"/>
            <path d="M377.2 378.3L375 380L149.6 91.5L151.8 89.8L377.2 378.3Z" fill="url(#paint142_linear)"/>
            <path d="M377.2 378.3L375 380L154.7 87.6L156.9 85.9L377.2 378.3Z" fill="url(#paint143_linear)"/>
            <path d="M377.3 378.3L375 380L159.8 83.7L162.1 82.1L377.3 378.3Z" fill="url(#paint144_linear)"/>
            <path d="M377.3 378.3L375 379.9L165 80L167.3 78.4L377.3 378.3Z" fill="url(#paint145_linear)"/>
            <path d="M377.3 378.3L375 379.9L170.2 76.4L172.6 74.8L377.3 378.3Z" fill="url(#paint146_linear)"/>
            <path d="M377.3 378.4L374.9 379.9L175.5 72.8L177.9 71.3L377.3 378.4Z" fill="url(#paint147_linear)"/>
            <path d="M377.3 378.4L374.9 379.9L180.9 69.4L183.3 67.9L377.3 378.4Z" fill="url(#paint148_linear)"/>
            <path d="M377.3 378.4L374.9 379.9L186.4 66L188.8 64.6L377.3 378.4Z" fill="url(#paint149_linear)"/>
            <path d="M377.3 378.4L374.9 379.8L191.8 62.8L194.3 61.3L377.3 378.4Z" fill="url(#paint150_linear)"/>
            <path d="M377.4 378.4L374.9 379.8L197.4 59.6L199.9 58.2L377.4 378.4Z" fill="url(#paint151_linear)"/>
            <path d="M377.4 378.5L374.9 379.8L203 56.5L205.5 55.2L377.4 378.5Z" fill="url(#paint152_linear)"/>
            <path d="M377.4 378.5L374.9 379.8L208.7 53.5L211.2 52.3L377.4 378.5Z" fill="url(#paint153_linear)"/>
            <path d="M377.4 378.5L374.9 379.7L214.4 50.7L216.9 49.4L377.4 378.5Z" fill="url(#paint154_linear)"/>
            <path d="M377.4 378.5L374.9 379.7L220.1 47.9L222.7 46.7L377.4 378.5Z" fill="url(#paint155_linear)"/>
            <path d="M377.4 378.6L374.8 379.7L225.9 45.2L228.5 44.1L377.4 378.6Z" fill="url(#paint156_linear)"/>
            <path d="M377.4 378.6L374.8 379.7L231.8 42.7L234.4 41.6L377.4 378.6Z" fill="url(#paint157_linear)"/>
            <path d="M377.4 378.6L374.8 379.7L237.7 40.2L240.3 39.1L377.4 378.6Z" fill="url(#paint158_linear)"/>
            <path d="M377.4 378.6L374.8 379.6L243.6 37.8L246.2 36.8L377.4 378.6Z" fill="url(#paint159_linear)"/>
            <path d="M377.4 378.6L374.8 379.6L249.6 35.6L252.2 34.6L377.4 378.6Z" fill="url(#paint160_linear)"/>
            <path d="M377.5 378.7L374.8 379.6L255.6 33.4L258.3 32.5L377.5 378.7Z" fill="url(#paint161_linear)"/>
            <path d="M377.5 378.7L374.8 379.6L261.7 31.4L264.3 30.5L377.5 378.7Z" fill="url(#paint162_linear)"/>
            <path d="M377.5 378.7L374.8 379.5L267.7 29.4L270.4 28.6L377.5 378.7Z" fill="url(#paint163_linear)"/>
            <path d="M377.5 378.7L374.8 379.5L273.9 27.6L276.6 26.8L377.5 378.7Z" fill="url(#paint164_linear)"/>
            <path d="M377.5 378.8L374.8 379.5L280 25.8L282.7 25.1L377.5 378.8Z" fill="url(#paint165_linear)"/>
            <path d="M377.5 378.8L374.8 379.5L286.2 24.2L288.9 23.5L377.5 378.8Z" fill="url(#paint166_linear)"/>
            <path d="M377.5 378.8L374.8 379.4L292.4 22.7L295.1 22.1L377.5 378.8Z" fill="url(#paint167_linear)"/>
            <path d="M377.5 378.8L374.8 379.4L298.6 21.3L301.4 20.7L377.5 378.8Z" fill="url(#paint168_linear)"/>
            <path d="M377.5 378.9L374.7 379.4L304.9 20L307.6 19.5L377.5 378.9Z" fill="url(#paint169_linear)"/>
            <path d="M377.5 378.9L374.7 379.4L311.2 18.8L313.9 18.3L377.5 378.9Z" fill="url(#paint170_linear)"/>
            <path d="M377.5 378.9L374.7 379.3L317.5 17.7L320.2 17.3L377.5 378.9Z" fill="url(#paint171_linear)"/>
            <path d="M377.5 378.9L374.7 379.3L323.8 16.8L326.6 16.4L377.5 378.9Z" fill="url(#paint172_linear)"/>
            <path d="M377.5 379L374.7 379.3L330.1 15.9L332.9 15.6L377.5 379Z" fill="url(#paint173_linear)"/>
            <path d="M377.5 379L374.7 379.3L336.5 15.2L339.3 14.9L377.5 379Z" fill="url(#paint174_linear)"/>
            <path d="M377.5 379L374.7 379.3L342.8 14.5L345.6 14.3L377.5 379Z" fill="url(#paint175_linear)"/>
            <path d="M377.5 379L374.7 379.2L349.2 14L352 13.8L377.5 379Z" fill="url(#paint176_linear)"/>
            <path d="M377.5 379.1L374.7 379.2L355.6 13.6L358.4 13.4L377.5 379.1Z" fill="url(#paint177_linear)"/>
            <path d="M377.5 379.1L374.7 379.2L361.9 13.3L364.8 13.2L377.5 379.1Z" fill="url(#paint178_linear)"/>
            <path d="M377.5 379.1L374.7 379.2L368.3 13.1L371.1 13L377.5 379.1Z" fill="url(#paint179_linear)"/>
            <path d="M377.5 13H374.7V379.1H377.5V13Z" fill="url(#paint180_linear)"/>
            <path d="M363.292 754.01C369.587 754.215 375.888 754.259 382.184 754.144C388.486 754.029 394.784 753.754 401.065 753.32C407.354 752.886 413.626 752.291 419.87 751.538C426.122 750.783 432.346 749.869 438.531 748.797C444.565 747.75 450.581 746.549 456.567 745.197C462.56 743.842 468.524 742.336 474.449 740.681C480.379 739.024 486.27 737.217 492.111 735.264C497.957 733.308 503.754 731.206 509.489 728.958C515.126 726.75 520.718 724.396 526.256 721.903C531.8 719.406 537.289 716.77 542.714 713.997C548.144 711.222 553.509 708.311 558.801 705.268C564.097 702.223 569.319 699.046 574.457 695.742C579.551 692.467 584.573 689.061 589.515 685.529C594.461 681.994 599.327 678.334 604.104 674.556C608.885 670.775 613.576 666.874 618.17 662.862C622.767 658.846 627.266 654.719 631.658 650.485C636.054 646.249 640.351 641.899 644.543 637.442C648.738 632.982 652.828 628.416 656.805 623.752C660.784 619.084 664.651 614.319 668.397 609.465C672.146 604.607 675.774 599.659 679.275 594.631C682.811 589.551 686.224 584.377 689.509 579.119C692.796 573.858 695.954 568.512 698.979 563.092C702.005 557.669 704.896 552.172 707.648 546.609C710.401 541.044 713.014 535.415 715.481 529.73C717.995 523.938 720.364 518.074 722.585 512.149C724.807 506.222 726.88 500.234 728.801 494.195C730.723 488.155 732.492 482.065 734.106 475.936C735.72 469.805 737.178 463.636 738.476 457.438C739.809 451.077 740.978 444.667 741.982 438.22C742.985 431.772 743.824 425.286 744.495 418.776C745.167 412.264 745.672 405.728 746.009 399.178C746.346 392.628 746.516 386.064 746.516 379.5C746.516 372.936 746.346 366.372 746.009 359.822C745.672 353.273 745.167 346.736 744.495 340.225C743.824 333.714 742.985 327.228 741.982 320.78C740.978 314.333 739.809 307.923 738.476 301.562C737.178 295.364 735.72 289.195 734.106 283.064C732.492 276.935 730.723 270.845 728.801 264.805C726.88 258.766 724.807 252.778 722.585 246.851C720.364 240.926 717.995 235.062 715.481 229.27C713.014 223.585 710.401 217.956 707.648 212.391C704.896 206.828 702.005 201.331 698.979 195.908C695.954 190.488 692.796 185.142 689.509 179.881C686.224 174.623 682.811 169.449 679.275 164.369C675.774 159.341 672.146 154.393 668.397 149.535C664.651 144.681 660.784 139.916 656.805 135.248C652.828 130.584 648.738 126.018 644.543 121.558C640.351 117.102 636.054 112.751 631.658 108.515C627.266 104.281 622.767 100.154 618.17 96.1382C613.576 92.1258 608.885 88.2256 604.104 84.4441C599.327 80.6656 594.461 77.0058 589.515 73.4711C584.573 69.9394 579.551 66.5327 574.457 63.2576C569.319 59.9542 564.097 56.7774 558.801 53.7321C553.509 50.6895 548.144 47.7783 542.714 45.0031C537.289 42.2305 531.8 39.5937 526.256 37.0975C520.718 34.6036 515.126 32.2501 509.489 30.0415C503.754 27.7944 497.957 25.6917 492.111 23.7362C486.27 21.7827 480.379 19.976 474.449 18.319C468.524 16.6636 462.56 15.1576 456.567 13.8036C450.581 12.4509 444.565 11.25 438.531 10.2034C432.346 9.13053 426.122 8.21668 419.87 7.46236C413.626 6.70884 407.354 6.1145 401.065 5.67984C394.784 5.24565 388.486 4.97081 382.184 4.8558C375.888 4.74091 369.587 4.78551 363.292 4.99009C357.003 5.19444 350.723 5.55836 344.461 6.08012C338.206 6.60132 331.97 7.28001 325.764 8.1145C319.564 8.94808 313.393 9.93713 307.263 11.0799C301.139 12.2215 295.055 13.5166 289.022 14.9634C283.148 16.3719 277.305 17.9283 271.502 19.6291C265.704 21.3282 259.946 23.1713 254.238 25.1547C248.536 27.1362 242.883 29.2578 237.289 31.5159C231.701 33.7718 226.172 36.1639 220.712 38.6887C215.355 41.1654 210.051 43.776 204.809 46.5151C199.571 49.2516 194.395 52.1165 189.288 55.1043C184.185 58.0894 179.153 61.1973 174.199 64.4228C169.249 67.6454 164.377 70.9853 159.591 74.4374C154.855 77.854 150.194 81.3878 145.614 85.0321C141.039 88.6735 136.544 92.4252 132.14 96.2806C127.738 100.133 123.426 104.089 119.21 108.141C114.997 112.191 110.881 116.337 106.868 120.574C102.858 124.807 98.943 129.14 95.1293 133.563C91.3181 137.983 87.608 142.494 84.0049 147.087C80.404 151.678 76.91 156.351 73.5289 161.1C70.1498 165.845 66.8832 170.666 63.7354 175.554C60.5594 180.485 57.4971 185.496 54.553 190.577C51.6106 195.656 48.7861 200.804 46.0843 206.015C43.3838 211.223 40.8056 216.492 38.3544 221.814C35.9042 227.134 33.5807 232.507 31.3884 237.923C29.1566 243.438 27.055 249.012 25.0865 254.637C23.1187 260.259 21.2838 265.932 19.5846 271.646C17.8859 277.358 16.3228 283.111 14.8981 288.895C13.4737 294.677 12.1876 300.491 11.0427 306.326C9.86808 312.313 8.83842 318.341 7.95467 324.401C7.07107 330.46 6.33329 336.55 5.74231 342.662C5.15139 348.772 4.70721 354.905 4.41077 361.048C4.11434 367.191 3.96561 373.345 3.96561 379.5C3.96561 385.655 4.11434 391.809 4.41077 397.952C4.70721 404.095 5.15139 410.228 5.74231 416.338C6.33329 422.45 7.07107 428.54 7.95467 434.599C8.83842 440.659 9.86808 446.687 11.0427 452.674C12.1876 458.509 13.4737 464.323 14.8981 470.105C16.3228 475.889 17.8859 481.642 19.5846 487.354C21.2838 493.068 23.1187 498.741 25.0865 504.363C27.055 509.988 29.1566 515.562 31.3884 521.077C33.5807 526.493 35.9042 531.866 38.3544 537.186C40.8056 542.508 43.3838 547.777 46.0843 552.985C48.7861 558.196 51.6106 563.345 54.553 568.423C57.4971 573.504 60.5594 578.515 63.7354 583.446C66.8832 588.334 70.1498 593.155 73.5289 597.9C76.91 602.649 80.404 607.322 84.0049 611.913C87.608 616.506 91.3181 621.017 95.1293 625.437C98.943 629.86 102.858 634.193 106.868 638.426C110.881 642.663 114.997 646.809 119.21 650.859C123.426 654.911 127.738 658.867 132.14 662.72C136.544 666.575 141.039 670.327 145.614 673.968C150.194 677.612 154.855 681.146 159.591 684.563C164.377 688.015 169.249 691.355 174.199 694.577C179.153 697.803 184.185 700.911 189.288 703.896C194.395 706.884 199.571 709.748 204.809 712.485C210.051 715.224 215.355 717.835 220.712 720.311C226.172 722.836 231.701 725.228 237.289 727.484C242.883 729.742 248.536 731.864 254.238 733.845C259.946 735.829 265.704 737.672 271.502 739.371C277.305 741.072 283.148 742.628 289.022 744.037C295.055 745.483 301.139 746.779 307.263 747.92C313.393 749.063 319.564 750.052 325.764 750.886C331.97 751.72 338.206 752.399 344.461 752.92C350.723 753.442 357.003 753.806 363.292 754.01ZM363.292 758.059C311.76 756.366 263.095 744.266 219.188 723.948C175.618 703.785 136.665 675.497 104.158 641.162C71.8378 607.025 45.8177 566.835 27.9063 522.564C10.052 478.434 0.2034 430.121 0.2034 379.5C0.2034 328.879 10.052 280.566 27.9063 236.436C45.8177 192.165 71.8378 151.975 104.158 117.838C136.665 83.5034 175.618 55.215 219.188 35.052C263.095 14.7335 311.76 2.63409 363.292 0.94133C415.288 -0.766709 465.262 8.27834 511.091 26.2168C557.284 44.2972 599.196 71.385 634.627 105.516C670.273 139.853 699.277 181.241 719.405 227.594C739.6 274.105 750.798 325.474 750.798 379.5C750.798 433.526 739.6 484.895 719.405 531.405C699.277 577.759 670.273 619.147 634.627 653.484C599.196 687.615 557.284 714.703 511.091 732.783C465.262 750.722 415.288 759.767 363.292 758.059Z"
                  fill={`${colors[0]}`}/>
            <defs>
                <linearGradient id="paint0_linear" x1="376.128" y1="379.128" x2="376.128" y2="745.255"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="375.984" y1="379.179" x2="369.594" y2="745.234"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="376.155" y1="379.117" x2="363.378" y2="745.025"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="376.039" y1="379.161" x2="356.878" y2="744.776"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint4_linear" x1="376.235" y1="379.086" x2="350.696" y2="744.335"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint5_linear" x1="376.143" y1="379.121" x2="344.233" y2="743.858"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint6_linear" x1="376.028" y1="379.07" x2="337.767" y2="743.184"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint7_linear" x1="376.029" y1="379.277" x2="331.398" y2="742.658"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint8_linear" x1="376.257" y1="379.166" x2="325.292" y2="741.742"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint9_linear" x1="376.117" y1="379.011" x2="318.854" y2="740.635"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint10_linear" x1="376.04" y1="378.997" x2="312.48" y2="739.559"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint11_linear" x1="376.036" y1="379.138" x2="306.179" y2="738.529"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint12_linear" x1="375.973" y1="379.16" x2="299.855" y2="737.27"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint13_linear" x1="376.284" y1="379.227" x2="293.906" y2="735.982"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint14_linear" x1="376.108" y1="379.058" x2="287.542" y2="734.312"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint15_linear" x1="376.025" y1="379.111" x2="281.271" y2="732.754"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint16_linear" x1="376.181" y1="378.963" x2="275.276" y2="730.922"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint17_linear" x1="376.158" y1="379.216" x2="269.102" y2="729.344"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint18_linear" x1="376.224" y1="379.012" x2="263.091" y2="727.236"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint19_linear" x1="376.126" y1="379.247" x2="256.915" y2="725.421"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint20_linear" x1="376.116" y1="379.059" x2="250.9" y2="723.109"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint21_linear" x1="376.235" y1="379.185" x2="245.014" y2="721.002"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint22_linear" x1="376.161" y1="379.082" x2="239.01" y2="718.556"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint23_linear" x1="376.062" y1="379.05" x2="233.016" y2="716.071"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint24_linear" x1="375.941" y1="379.105" x2="227.036" y2="713.563"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint25_linear" x1="376.075" y1="379.091" x2="221.349" y2="710.913"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint26_linear" x1="376.194" y1="379.195" x2="215.684" y2="708.271"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint27_linear" x1="376.127" y1="379.165" x2="209.905" y2="705.384"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint28_linear" x1="376.052" y1="379.289" x2="204.155" y2="702.543"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint29_linear" x1="376.058" y1="379.138" x2="198.559" y2="699.354"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint30_linear" x1="376.061" y1="379.175" x2="192.997" y2="696.241"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint31_linear" x1="376.141" y1="378.967" x2="187.586" y2="692.812"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint32_linear" x1="375.967" y1="379.169" x2="181.956" y2="689.645"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint33_linear" x1="376.128" y1="378.971" x2="176.735" y2="686.042"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint34_linear" x1="376.046" y1="379.219" x2="171.307" y2="682.738"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint35_linear" x1="376.295" y1="379.093" x2="166.284" y2="679.025"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint36_linear" x1="376.114" y1="379.198" x2="160.905" y2="675.395"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint37_linear" x1="376.01" y1="379.162" x2="155.674" y2="671.551"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint38_linear" x1="376.179" y1="379.244" x2="150.754" y2="667.752"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint39_linear" x1="375.974" y1="379.172" x2="145.57" y2="663.69"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint40_linear" x1="376.046" y1="379.249" x2="140.7" y2="659.703"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint41_linear" x1="376.19" y1="379.245" x2="135.974" y2="655.562"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint42_linear" x1="375.958" y1="379.149" x2="130.982" y2="651.219"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint43_linear" x1="376.239" y1="379.034" x2="126.54" y2="646.819"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint44_linear" x1="376.125" y1="379.309" x2="121.776" y2="642.664"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint45_linear" x1="376.097" y1="379.127" x2="117.209" y2="638.016"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint46_linear" x1="376.135" y1="378.948" x2="112.78" y2="633.297"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint47_linear" x1="376.232" y1="379.227" x2="108.447" y2="628.927"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint48_linear" x1="375.962" y1="379.096" x2="103.892" y2="624.072"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint49_linear" x1="376.196" y1="379.016" x2="99.8794" y2="619.232"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint50_linear" x1="376.055" y1="379.004" x2="95.6015" y2="614.351"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint51_linear" x1="375.981" y1="379.076" x2="91.4633" y2="609.48"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint52_linear" x1="376.184" y1="379.018" x2="87.6759" y2="604.443"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint53_linear" x1="376.016" y1="379.088" x2="83.6265" y2="599.424"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint54_linear" x1="376.119" y1="379.059" x2="79.9216" y2="594.269"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint55_linear" x1="376.285" y1="379.171" x2="76.3534" y2="589.181"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint56_linear" x1="376.055" y1="379.037" x2="72.5352" y2="583.775"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint57_linear" x1="376.119" y1="379.276" x2="69.0479" y2="578.669"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint58_linear" x1="375.978" y1="379.079" x2="65.5021" y2="573.09"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint59_linear" x1="376.131" y1="379.279" x2="62.2867" y2="567.835"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint60_linear" x1="376.068" y1="379.08" x2="59.0014" y2="562.144"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint61_linear" x1="376.063" y1="379.114" x2="55.8481" y2="556.612"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint62_linear" x1="376.067" y1="378.974" x2="52.8129" y2="550.871"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint63_linear" x1="376.129" y1="379.094" x2="49.9095" y2="545.315"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint64_linear" x1="376.193" y1="379.069" x2="47.1172" y2="539.58"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint65_linear" x1="376.077" y1="379.158" x2="44.256" y2="533.883"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint66_linear" x1="375.956" y1="379.138" x2="41.4986" y2="528.042"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint67_linear" x1="376.064" y1="379.194" x2="39.0435" y2="522.24"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint68_linear" x1="376.156" y1="379.17" x2="36.6822" y2="516.321"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint69_linear" x1="376.227" y1="379.082" x2="34.41" y2="510.302"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint70_linear" x1="376.114" y1="379.188" x2="32.0636" y2="504.404"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint71_linear" x1="376.132" y1="379.022" x2="29.9584" y2="498.233"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint72_linear" x1="376.207" y1="379.235" x2="27.9832" y2="492.369"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint73_linear" x1="376.158" y1="379.052" x2="26.0305" y2="486.107"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint74_linear" x1="376.166" y1="379.275" x2="24.2075" y2="480.179"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint75_linear" x1="376.038" y1="379.137" x2="22.3949" y2="473.891"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint76_linear" x1="376.107" y1="379.187" x2="20.8537" y2="467.753"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint77_linear" x1="376.268" y1="379.049" x2="19.5131" y2="461.428"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint78_linear" x1="375.996" y1="379.092" x2="17.8863" y2="455.21"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint79_linear" x1="376.049" y1="379.114" x2="16.6586" y2="448.971"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint80_linear" x1="376.047" y1="379.235" x2="15.4843" y2="442.795"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint81_linear" x1="376.113" y1="379.226" x2="14.4885" y2="436.489"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint82_linear" x1="376.238" y1="379.101" x2="13.6621" y2="430.066"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint83_linear" x1="376.052" y1="378.998" x2="12.6704" y2="423.629"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint84_linear" x1="376.041" y1="379.171" x2="11.9272" y2="417.432"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint85_linear" x1="376.14" y1="379.134" x2="11.4041" y2="411.044"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint86_linear" x1="376.215" y1="379.167" x2="10.9658" y2="404.707"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint87_linear" x1="376.056" y1="379.096" x2="10.4411" y2="398.258"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint88_linear" x1="376.15" y1="379.137" x2="10.2419" y2="391.915"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint89_linear" x1="376.013" y1="379.079" x2="9.95831" y2="385.469"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint90_linear" x1="376.128" y1="379.128" x2="10" y2="379.128"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint91_linear" x1="376.013" y1="379.082" x2="9.95885" y2="372.692"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint92_linear" x1="376.15" y1="379.136" x2="10.2417" y2="366.359"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint93_linear" x1="376.057" y1="379.101" x2="10.4422" y2="359.94"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint94_linear" x1="376.213" y1="379.159" x2="10.9642" y2="353.619"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint95_linear" x1="376.14" y1="379.132" x2="11.4038" y2="347.222"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint96_linear" x1="376.099" y1="379.043" x2="11.985" y2="340.782"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint97_linear" x1="375.995" y1="379.164" x2="12.6136" y2="334.533"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint98_linear" x1="376.182" y1="379.215" x2="13.6059" y2="328.25"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint99_linear" x1="376.18" y1="379.056" x2="14.5555" y2="321.794"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint100_linear" x1="376.143" y1="379.011" x2="15.5807" y2="315.451"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint101_linear" x1="376.071" y1="379.089" x2="16.6801" y2="309.232"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint102_linear" x1="376.026" y1="379.07" x2="17.9165" y2="302.952"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint103_linear" x1="376.166" y1="379.258" x2="19.4113" y2="296.879"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint104_linear" x1="376.15" y1="379.08" x2="20.8966" y2="290.514"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint105_linear" x1="376.08" y1="379.07" x2="22.4374" y2="284.316"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint106_linear" x1="376.234" y1="379.064" x2="24.2749" y2="278.159"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint107_linear" x1="376.103" y1="379.188" x2="25.9749" y2="272.133"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint108_linear" x1="376.232" y1="379.111" x2="28.0081" y2="265.977"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint109_linear" x1="376.073" y1="379.189" x2="29.8988" y2="259.978"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint110_linear" x1="376.152" y1="379.087" x2="32.1021" y2="253.871"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint111_linear" x1="376.157" y1="379.205" x2="34.3406" y2="247.985"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint112_linear" x1="376.165" y1="379.12" x2="36.6913" y2="241.968"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint113_linear" x1="376.128" y1="379.059" x2="39.1077" y2="236.013"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint114_linear" x1="376.043" y1="379.035" x2="41.5857" y2="230.131"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint115_linear" x1="376.117" y1="379.087" x2="44.2953" y2="224.361"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint116_linear" x1="376.132" y1="379.189" x2="47.0565" y2="218.679"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint117_linear" x1="376.112" y1="379.146" x2="49.892" y2="212.924"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint118_linear" x1="376.024" y1="379.175" x2="52.7698" y2="207.278"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint119_linear" x1="376.09" y1="379.104" x2="55.8745" y2="201.605"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint120_linear" x1="376.077" y1="379.123" x2="59.0101" y2="196.059"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint121_linear" x1="376.199" y1="379.057" x2="62.3541" y2="190.502"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint122_linear" x1="376.036" y1="379.083" x2="65.5595" y2="185.072"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint123_linear" x1="376.19" y1="379.055" x2="69.1182" y2="179.662"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint124_linear" x1="376.055" y1="379.138" x2="72.5349" y2="174.399"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint125_linear" x1="376.217" y1="379.176" x2="76.2854" y2="169.165"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint126_linear" x1="376.095" y1="379.154" x2="79.8977" y2="163.944"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint127_linear" x1="376.062" y1="379.099" x2="83.6728" y2="158.763"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint128_linear" x1="376.107" y1="379.198" x2="87.5987" y2="153.773"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint129_linear" x1="376.044" y1="379.091" x2="91.5265" y2="148.687"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint130_linear" x1="376.048" y1="379.151" x2="95.5947" y2="143.804"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint131_linear" x1="376.113" y1="379.2" x2="99.7959" y2="138.984"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint132_linear" x1="376.048" y1="379.077" x2="103.978" y2="134.101"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint133_linear" x1="376.207" y1="379.127" x2="108.421" y2="129.428"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint134_linear" x1="376.064" y1="379.202" x2="112.709" y2="124.853"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint135_linear" x1="376.116" y1="379.117" x2="117.227" y2="120.228"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint136_linear" x1="376.191" y1="379.057" x2="121.842" y2="115.701"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint137_linear" x1="376.137" y1="379.202" x2="126.438" y2="111.416"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint138_linear" x1="376.072" y1="379.061" x2="131.096" y2="106.992"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint139_linear" x1="376.19" y1="379.106" x2="135.974" y2="102.789"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint140_linear" x1="376.138" y1="379.057" x2="140.791" y2="98.6032"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint141_linear" x1="376.087" y1="379.062" x2="145.683" y2="94.5447"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint142_linear" x1="376.182" y1="379.103" x2="150.758" y2="90.5948"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint143_linear" x1="376.098" y1="379.08" x2="155.762" y2="86.6899"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint144_linear" x1="376.145" y1="379.1" x2="160.935" y2="82.9026"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint145_linear" x1="376.173" y1="379.189" x2="166.162" y2="79.257"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint146_linear" x1="376.127" y1="379.074" x2="171.389" y2="75.5544"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint147_linear" x1="376.083" y1="379.178" x2="176.69" y2="72.1068"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint148_linear" x1="376.088" y1="379.07" x2="182.077" y2="68.5938"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint149_linear" x1="376.088" y1="379.181" x2="187.533" y2="65.3366"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint150_linear" x1="376.12" y1="379.096" x2="193.056" y2="62.0292"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint151_linear" x1="376.11" y1="379.107" x2="198.611" y2="58.8913"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint152_linear" x1="376.146" y1="379.061" x2="204.249" y2="55.807"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint153_linear" x1="376.137" y1="379.117" x2="209.915" y2="52.8971"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint154_linear" x1="376.163" y1="379.125" x2="215.652" y2="50.049"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint155_linear" x1="376.104" y1="379.125" x2="221.379" y2="47.304"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint156_linear" x1="376.072" y1="379.091" x2="227.167" y2="44.6338"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint157_linear" x1="376.093" y1="379.134" x2="233.047" y2="42.1134"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint158_linear" x1="376.127" y1="379.147" x2="238.976" y2="39.6731"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint159_linear" x1="376.167" y1="379.135" x2="244.947" y2="37.3183"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint160_linear" x1="376.111" y1="379.143" x2="250.895" y2="35.0923"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint161_linear" x1="376.15" y1="379.098" x2="256.939" y2="32.9242"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint162_linear" x1="376.129" y1="379.174" x2="262.996" y2="30.9497"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint163_linear" x1="376.151" y1="379.112" x2="269.095" y2="28.9846"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint164_linear" x1="376.111" y1="379.175" x2="275.207" y2="27.2163"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint165_linear" x1="376.102" y1="379.114" x2="281.348" y2="25.4715"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint166_linear" x1="376.112" y1="379.14" x2="287.546" y2="23.886"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint167_linear" x1="376.177" y1="379.131" x2="293.798" y2="22.376"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint168_linear" x1="376.1" y1="379.098" x2="299.982" y2="20.9884"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint169_linear" x1="376.111" y1="379.112" x2="306.253" y2="19.7215"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint170_linear" x1="376.093" y1="379.142" x2="312.533" y2="18.5792"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint171_linear" x1="376.11" y1="379.149" x2="318.848" y2="17.5246"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint172_linear" x1="376.157" y1="379.136" x2="325.192" y2="16.5601"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint173_linear" x1="376.127" y1="379.089" x2="331.496" y2="15.7073"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint174_linear" x1="376.104" y1="379.127" x2="337.843" y2="15.013"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint175_linear" x1="376.13" y1="379.13" x2="344.22" y2="14.3941"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint176_linear" x1="376.142" y1="379.145" x2="350.602" y2="13.8961"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint177_linear" x1="376.116" y1="379.114" x2="356.955" y2="13.4991"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint178_linear" x1="376.131" y1="379.132" x2="363.354" y2="13.2236"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint179_linear" x1="376.11" y1="379.109" x2="369.72" y2="13.0543"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
                <linearGradient id="paint180_linear" x1="376.128" y1="379.128" x2="376.128" y2="13"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2116" stopOpacity="0"/>
                    <stop offset="0.3073" stopColor="#101010" stopOpacity="0.1213"/>
                    <stop offset="0.4059" stopColor={`${colors[6]}`} stopOpacity="0.2464"/>
                    <stop offset="0.5058" stopColor={`${colors[5]}`} stopOpacity="0.3731"/>
                    <stop offset="0.6066" stopColor={`${colors[4]}`} stopOpacity="0.501"/>
                    <stop offset="0.7082" stopColor={`${colors[3]}`} stopOpacity="0.6299"/>
                    <stop offset="0.8105" stopColor={`${colors[2]}`} stopOpacity="0.7597"/>
                    <stop offset="0.9113" stopColor={`${colors[1]}`} stopOpacity="0.8875"/>
                    <stop offset="1" stopColor={`${colors[0]}`}/>
                </linearGradient>
            </defs>
        </svg>
    </div>
}

export default React.memo(Speedometer);