"use client"

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React from 'react'

export default function ShelvesBooksSvg({
    className,
}: {
    className?: string;
})  {
    const { theme } = useTheme()

    if (theme === "dark") {
        return (
            <svg
                width="100%"
                fill="none" 
                viewBox="0 0 667 528" 
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                    "",
                    className
                )}
            >
                <path d="M197.353 389.238L267.207 389.238L267.207 387.519L197.353 387.519L197.353 389.238Z" fill="#D04B32"/>
                <path d="M197.353 406.213L267.207 406.213L267.207 404.494L197.353 404.494L197.353 406.213Z" fill="#D04B32"/>
                <path d="M142.829 406.232H205.563V387.575H142.829C141.847 387.575 141.11 388.312 141.11 389.294V404.391C141.11 405.373 141.847 406.232 142.829 406.232Z" fill="#D04B32"/>
                <path d="M203.105 404.514H261.542L261.297 402.55C260.805 398.745 260.805 395.063 261.297 391.258L261.542 389.294H203.105C201.018 389.294 199.422 390.889 199.422 392.976V400.832C199.422 402.796 201.018 404.514 203.105 404.514Z" fill="#F9E5D0"/>
                <path d="M199.422 393.344H261.051L261.174 392.117H199.545L199.422 392.73V393.344Z" fill="#D3B89D"/>
                <path d="M260.928 396.29H199.422V397.518H260.928V396.29Z" fill="#D3B89D"/>
                <path d="M199.422 401.323H261.174L261.051 400.095H199.422V401.323Z" fill="#D3B89D"/>
                <path d="M154.987 406.195L177.699 406.195L177.699 387.537L154.987 387.537L154.987 406.195Z" fill="#D0422E"/>
                <path d="M146.813 406.195L151.233 406.195L151.233 387.537L146.813 387.537L146.813 406.195Z" fill="#D0422E"/>
                <path d="M188.447 406.195L192.866 406.195L192.866 387.537L188.447 387.537L188.447 406.195Z" fill="#D0422E"/>
                <path d="M186.417 406.195L186.908 406.195L186.908 387.537L186.417 387.537L186.417 406.195Z" fill="#D0422E"/>
                <path opacity="0.25" d="M199.422 395.185C199.422 395.185 199.3 402.305 234.656 404.514H205.561H202.86C202.86 404.514 199.422 404.514 199.422 400.341V395.185Z" fill="#948174"/>
                <path opacity="0.4" d="M199.424 400.095C199.424 400.709 199.424 399.359 199.424 399.973C199.179 404.391 202.862 404.514 202.862 404.514H205.072H267.314V406.232H142.829C141.11 406.11 141.11 404.514 141.11 404.514V400.095H199.424Z" fill="#9D1604"/>
                <path opacity="0.3" d="M141.063 400.046L199.377 400.046L199.377 395.259L141.063 395.259L141.063 400.046Z" fill="#A11C0E"/>
                <path opacity="0.5" d="M149.58 391.749H164.803C165.171 391.749 165.416 391.503 165.416 391.135V390.276C165.416 389.907 165.171 389.662 164.803 389.662H149.58C149.211 389.662 148.966 389.907 148.966 390.276V391.135C148.966 391.503 149.211 391.749 149.58 391.749Z" fill="#DF9E95"/>
                <path d="M225.201 369H155.347V370.718H225.201V369Z" fill="#1F8949"/>
                <path d="M225.201 385.939H155.347V387.657H225.201V385.939Z" fill="#1F8949"/>
                <path d="M279.71 387.657H216.976V369H279.71C280.692 369 281.428 369.737 281.428 370.718V385.816C281.551 386.798 280.692 387.657 279.71 387.657Z" fill="#1F8949"/>
                <path d="M219.431 385.939H160.995L161.24 383.975C161.731 380.17 161.731 376.488 161.24 372.682L160.995 370.719H219.431C221.518 370.719 223.114 372.314 223.114 374.401V382.257C223.114 384.22 221.518 385.939 219.431 385.939Z" fill="#F9E5D0"/>
                <path d="M238.583 371.946H227.166V384.589H238.583V371.946Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M251.473 371.946H240.056V384.589H251.473V371.946Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M277.253 371.946H265.836V384.589H277.253V371.946Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M238.583 374.278L232.813 376.365L227.166 374.278L232.813 372.069L238.583 374.278Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M238.583 376.978L232.813 379.065L227.166 376.978L232.813 374.769L238.583 376.978Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M238.583 379.679L232.813 381.765L227.166 379.679L232.813 377.469L238.583 379.679Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M238.583 382.379L232.813 384.589L227.166 382.379L232.813 380.293L238.583 382.379Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M251.473 374.278L245.826 376.365L240.056 374.278L245.826 372.069L251.473 374.278Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M251.473 376.978L245.826 379.065L240.056 376.978L245.826 374.769L251.473 376.978Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M251.473 379.679L245.826 381.765L240.056 379.679L245.826 377.469L251.473 379.679Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M251.473 382.379L245.826 384.589L240.056 382.379L245.826 380.293L251.473 382.379Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M264.486 371.946H253.069V384.589H264.486V371.946Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M264.363 374.278L258.715 376.365L252.945 374.278L258.715 372.069L264.363 374.278Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M264.363 376.978L258.715 379.065L252.945 376.978L258.715 374.769L264.363 376.978Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M264.363 379.679L258.715 381.765L252.945 379.679L258.715 377.469L264.363 379.679Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M264.363 382.379L258.715 384.589L252.945 382.379L258.715 380.293L264.363 382.379Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M277.253 374.278L271.606 376.365L265.836 374.278L271.606 372.069L277.253 374.278Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M277.253 376.978L271.606 379.065L265.836 376.978L271.606 374.769L277.253 376.978Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M277.253 379.679L271.606 381.765L265.836 379.679L271.606 377.469L277.253 379.679Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M277.253 382.379L271.606 384.589L265.836 382.379L271.606 380.293L277.253 382.379Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M223.114 374.769H161.486L161.363 373.542H222.991L223.114 374.155V374.769Z" fill="#D3B89D"/>
                <path d="M223.114 377.715H161.608V378.942H223.114V377.715Z" fill="#D3B89D"/>
                <path d="M223.114 382.748H161.485V381.52H223.114V382.748Z" fill="#D3B89D"/>
                <path opacity="0.25" d="M223.114 376.61C223.114 376.61 223.237 383.729 187.88 385.939H216.853H219.677C219.677 385.939 223.114 385.939 223.114 381.766V376.61Z" fill="#7F9A76"/>
                <path opacity="0.4" d="M223.114 381.52C223.114 382.134 223.114 380.784 223.114 381.397C223.36 385.816 219.677 385.939 219.677 385.939H217.467H155.347V387.657H279.709C281.428 387.535 281.428 385.939 281.428 385.939V381.52H223.114Z" fill="#054705"/>
                <path opacity="0.2" d="M281.428 376.61H223.114V381.397H281.428V376.61Z" fill="#054705"/>
                <path opacity="0.29" d="M264.241 374.278H249.018C248.65 374.278 248.404 374.033 248.404 373.664V372.805C248.404 372.437 248.65 372.191 249.018 372.191H264.241C264.609 372.191 264.855 372.437 264.855 372.805V373.664C264.855 374.033 264.609 374.278 264.241 374.278Z" fill="#3EC16D"/>
                <path d="M380.577 407.736V280.779H356.458V407.736H380.577Z" fill="#D04B32"/>
                <path d="M380.525 383.59H356.406V392.81H380.525V383.59Z" fill="#932F22"/>
                <path d="M380.525 300.843H356.406V310.063H380.525V300.843Z" fill="#932F22"/>
                <path opacity="0.3" d="M359.48 308.881V292.805C359.48 292.332 359.953 291.859 360.426 291.859C360.899 291.859 361.372 292.332 361.372 292.805V308.881C361.372 309.354 360.899 309.827 360.426 309.827C359.953 309.827 359.48 309.591 359.48 308.881Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M380.525 280.747H372.485V407.704H380.525V280.747Z" fill="#9D1604"/>
                <path opacity="0.3" d="M372.722 280.747H364.682V407.704H372.722V280.747Z" fill="#A11C0E"/>
                <path d="M356.312 407.662V307.184H331.484V407.662H356.312Z" fill="#1F8949"/>
                <path d="M343.874 333.469L340.8 323.303L343.874 319.047L346.948 323.303L343.874 333.469Z" fill="#16543C"/>
                <path d="M344.347 333.469L347.657 323.303L352.623 321.648V326.849L344.347 333.469Z" fill="#16543C"/>
                <path d="M343.637 333.469L340.327 323.303L335.361 321.648V326.849L343.637 333.469Z" fill="#16543C"/>
                <path d="M352.859 337.961H335.361V350.255H352.859V337.961Z" fill="#16543C"/>
                <path d="M352.859 386.663H335.361V392.81H352.859V386.663Z" fill="#16543C"/>
                <path opacity="0.29" d="M335.361 343.162V327.086C335.361 326.613 335.834 326.14 336.307 326.14C336.78 326.14 337.253 326.613 337.253 327.086V343.162C337.253 343.635 336.78 344.108 336.307 344.108C335.597 344.108 335.361 343.635 335.361 343.162Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M356.406 307.227H348.367V407.705H356.406V307.227Z" fill="#054705"/>
                <path opacity="0.2" d="M348.603 307.227H340.563V407.705H348.603V307.227Z" fill="#054705"/>
                <path d="M429.319 407.798V290.061H406.382V407.798H429.319Z" fill="#1F8949"/>
                <g opacity="0.7">
                    <path d="M428.921 322.934V300.947H406.694V322.934H428.921Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M424.98 322.83L421.197 311.955L424.98 300.843L428.764 311.955L424.98 322.83Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M420.251 322.83L416.467 311.955L420.251 300.843L424.034 311.955L420.251 322.83Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M415.285 322.83L411.738 311.955L415.285 300.843L419.305 311.955L415.285 322.83Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M410.556 322.83L406.772 311.955L410.556 300.843L414.339 311.955L410.556 322.83Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M429.021 349.04V327.053H406.794V349.04H429.021Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M424.979 349.072L421.196 337.961L424.979 327.085L428.763 337.961L424.979 349.072Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M420.251 349.072L416.467 337.961L420.251 327.085L424.034 337.961L420.251 349.072Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M415.285 349.072L411.738 337.961L415.285 327.085L419.305 337.961L415.285 349.072Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M410.556 349.073L406.772 337.961L410.556 327.086L414.339 337.961L410.556 349.073Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M428.885 375.146V353.159H406.658V375.146H428.885Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M424.981 375.079L421.197 364.203L424.981 353.092L428.764 364.203L424.981 375.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M420.251 375.079L416.467 364.203L420.251 353.092L424.034 364.203L420.251 375.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M415.286 375.079L411.739 364.203L415.286 353.092L419.305 364.203L415.286 375.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M410.557 375.079L406.773 364.203L410.557 353.092L414.34 364.203L410.557 375.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path opacity="0.2" d="M429.236 385.008H406.299V391.155H429.236V385.008Z" fill="#054705"/>
                <path opacity="0.29" d="M409.136 330.868V314.792C409.136 314.319 409.609 313.846 410.082 313.846C410.555 313.846 411.028 314.319 411.028 314.792V330.868C411.028 331.341 410.555 331.814 410.082 331.814C409.609 331.814 409.136 331.341 409.136 330.868Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M429.473 289.968H421.433V407.704H429.473V289.968Z" fill="#054705"/>
                <path opacity="0.2" d="M421.433 289.968H413.394V407.704H421.433V289.968Z" fill="#054705"/>
                <path d="M406.152 407.584V272.116H380.378V407.584H406.152Z" fill="#1F8949"/>
                <path opacity="0.4" d="M386.909 272V407.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M391.402 272V407.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M395.659 272V407.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M399.915 272V407.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.29" d="M385.018 304.626V288.549C385.018 288.076 385.491 287.604 385.963 287.604C386.436 287.604 386.909 288.076 386.909 288.549V304.626C386.909 305.099 386.436 305.571 385.963 305.571C385.491 305.571 385.018 305.099 385.018 304.626Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M406.299 272H398.259V407.468H406.299V272Z" fill="#054705"/>
                <path opacity="0.2" d="M398.259 272H390.22V407.468H398.259V272Z" fill="#054705"/>
                <path d="M225.199 136.447L238.075 72.4811L222.081 69.2626L209.204 133.229L225.199 136.447Z" fill="#D04B32"/>
                <path d="M226.746 87.6385L226.037 80.7823L228.638 78.4182L230.056 81.4916L226.746 87.6385Z" fill="#932F22"/>
                <path d="M226.982 87.6385L230.529 81.728L233.839 81.2552L233.13 84.5651L226.982 87.6385Z" fill="#932F22"/>
                <path d="M226.508 87.6386L225.563 80.7824L222.725 78.8911L222.016 82.2009L226.508 87.6386Z" fill="#932F22"/>
                <path d="M231.637 91.6734L220.51 89.4344L218.924 97.3143L230.051 99.5533L231.637 91.6734Z" fill="#932F22"/>
                <path d="M225.357 122.595L214.23 120.357L213.437 124.296L224.564 126.535L225.357 122.595Z" fill="#932F22"/>
                <path opacity="0.3" d="M219.888 92.6033L222.016 82.4373C222.016 82.2009 222.489 81.9645 222.726 81.9645C222.962 81.9645 223.199 82.4373 223.199 82.6737L221.07 92.8398C221.07 93.0762 220.598 93.3126 220.361 93.3126C220.125 93.3126 219.888 93.0762 219.888 92.6033Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M238.066 72.4978L232.966 71.4716L220.09 135.438L225.189 136.464L238.066 72.4978Z" fill="#9D1604"/>
                <path opacity="0.3" d="M232.899 71.2956L227.799 70.2694L214.922 134.236L220.022 135.262L232.899 71.2956Z" fill="#A11C0E"/>
                <path d="M261.744 136.864V27.5582L239.139 27.5582L239.139 136.864H261.744Z" fill="#D04B32"/>
                <path d="M261.695 116.075H239.091V124.014H261.695V116.075Z" fill="#932F22"/>
                <path d="M261.695 44.8331H239.091V52.7715H261.695V44.8331Z" fill="#932F22"/>
                <path opacity="0.3" d="M241.971 51.7538V37.9125C241.971 37.5054 242.414 37.0983 242.858 37.0983C243.301 37.0983 243.744 37.5054 243.744 37.9125V51.7538C243.744 52.1609 243.301 52.568 242.858 52.568C242.414 52.568 241.971 52.3645 241.971 51.7538Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M261.695 27.5314H254.16V136.838H261.695V27.5314Z" fill="#9D1604"/>
                <path opacity="0.3" d="M254.381 27.5314H246.847V136.838H254.381V27.5314Z" fill="#A11C0E"/>
                <path d="M307.423 136.918V35.55L285.927 35.55V136.918H307.423Z" fill="#1F8949"/>
                <g opacity="0.7">
                    <path d="M307.05 63.8528V44.9227H286.219V63.8528H307.05Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M303.357 63.7632L299.812 54.3999L303.357 44.8331L306.903 54.3999L303.357 63.7632Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M298.925 63.7632L295.379 54.3999L298.925 44.8331L302.471 54.3999L298.925 63.7632Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M294.27 63.7632L290.946 54.3999L294.27 44.8331L298.037 54.3999L294.27 63.7632Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M289.839 63.7632L286.293 54.3999L289.839 44.8331L293.385 54.3999L289.839 63.7632Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M307.145 86.3291V67.399H286.314V86.3291H307.145Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M303.357 86.3572L299.812 76.7904L303.357 67.4271L306.903 76.7904L303.357 86.3572Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M298.926 86.3572L295.38 76.7904L298.926 67.4271L302.472 76.7904L298.926 86.3572Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M294.271 86.3572L290.947 76.7904L294.271 67.4271L298.038 76.7904L294.271 86.3572Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M289.839 86.3574L286.293 76.7905L289.839 67.4272L293.385 76.7905L289.839 86.3574Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M307.018 108.806V89.8756H286.187V108.806H307.018Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M303.358 108.748L299.812 99.3843L303.358 89.8175L306.904 99.3843L303.358 108.748Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M298.926 108.748L295.38 99.3843L298.926 89.8175L302.472 99.3843L298.926 108.748Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M294.271 108.748L290.947 99.3843L294.271 89.8175L298.039 99.3843L294.271 108.748Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M289.841 108.748L286.295 99.3843L289.841 89.8175L293.386 99.3843L289.841 108.748Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path opacity="0.2" d="M307.346 117.297H285.85V122.589H307.346V117.297Z" fill="#054705"/>
                <path opacity="0.29" d="M288.509 70.684V56.8426C288.509 56.4355 288.952 56.0284 289.395 56.0284C289.838 56.0284 290.282 56.4355 290.282 56.8426V70.684C290.282 71.0911 289.838 71.4982 289.395 71.4982C288.952 71.4982 288.509 71.0911 288.509 70.684Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M307.568 35.4698H300.033V136.838H307.568V35.4698Z" fill="#054705"/>
                <path opacity="0.2" d="M300.034 35.4698H292.499V136.838H300.034V35.4698Z" fill="#054705"/>
                <path d="M285.713 136.734V20.1001L261.558 20.1001V136.734H285.713Z" fill="#1F8949"/>
                <path opacity="0.4" d="M267.678 20V136.838" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M271.889 20V136.838" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M275.878 20V136.838" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M279.866 20V136.838" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.29" d="M265.906 48.0898V34.2485C265.906 33.8414 266.349 33.4343 266.792 33.4343C267.235 33.4343 267.679 33.8414 267.679 34.2485V48.0898C267.679 48.4969 267.235 48.904 266.792 48.904C266.349 48.904 265.906 48.4969 265.906 48.0898Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M285.851 20H278.316V136.634H285.851V20Z" fill="#054705"/>
                <path opacity="0.2" d="M278.315 20H270.781V136.634H278.315V20Z" fill="#054705"/>
                <path d="M461.512 135.537V35.0591L436.684 35.0591V135.537H461.512Z" fill="#1F8949"/>
                <path d="M449.074 61.3438L446 51.1778L449.074 46.9222L452.148 51.1778L449.074 61.3438Z" fill="#16543C"/>
                <path d="M449.546 61.3439L452.857 51.1779L457.823 49.5229V54.7242L449.546 61.3439Z" fill="#16543C"/>
                <path d="M448.837 61.3439L445.527 51.1779L440.561 49.5229V54.7242L448.837 61.3439Z" fill="#16543C"/>
                <path d="M458.059 65.8359H440.561V78.1297H458.059V65.8359Z" fill="#16543C"/>
                <path d="M458.059 114.538H440.561V120.685H458.059V114.538Z" fill="#16543C"/>
                <path opacity="0.29" d="M440.561 71.037V54.9606C440.561 54.4877 441.034 54.0149 441.507 54.0149C441.98 54.0149 442.453 54.4877 442.453 54.9606V71.037C442.453 71.5099 441.98 71.9827 441.507 71.9827C440.798 71.9827 440.561 71.5099 440.561 71.037Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M461.606 35.1013H453.566V135.579H461.606V35.1013Z" fill="#054705"/>
                <path opacity="0.2" d="M453.803 35.1013H445.764V135.579H453.803V35.1013Z" fill="#054705"/>
                <path d="M414.154 135.83V18.0933L437.091 18.0933V135.83H414.154Z" fill="#1F8949"/>
                <g opacity="0.7">
                    <path d="M414.551 50.9663V28.9794L436.779 28.9794V50.9663H414.551Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M418.493 50.8623L422.276 39.987L418.493 28.8753L414.71 39.987L418.493 50.8623Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M423.222 50.8623L427.006 39.987L423.222 28.8753L419.439 39.987L423.222 50.8623Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M428.188 50.8623L431.735 39.987L428.188 28.8753L424.168 39.987L428.188 50.8623Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M432.917 50.8623L436.701 39.987L432.917 28.8753L429.134 39.987L432.917 50.8623Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M414.452 77.0721V55.0852L436.679 55.0852V77.0721H414.452Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M418.493 77.1048L422.277 65.9931L418.493 55.1178L414.71 65.9931L418.493 77.1048Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M423.222 77.1048L427.006 65.9931L423.222 55.1178L419.439 65.9931L423.222 77.1048Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M428.188 77.1048L431.735 65.9931L428.188 55.1178L424.168 65.9931L428.188 77.1048Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M432.917 77.1049L436.701 65.9932L432.917 55.1179L429.134 65.9932L432.917 77.1049Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M414.588 103.178V81.1912H436.815V103.178H414.588Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M418.492 103.111L422.276 92.2355L418.492 81.1238L414.709 92.2355L418.492 103.111Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M423.222 103.111L427.006 92.2355L423.222 81.1238L419.439 92.2355L423.222 103.111Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M428.187 103.111L431.734 92.2355L428.187 81.1238L424.168 92.2355L428.187 103.111Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M432.916 103.111L436.7 92.2355L432.916 81.1238L429.133 92.2355L432.916 103.111Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path opacity="0.2" d="M414.237 113.04H437.173V119.187H414.237V113.04Z" fill="#054705"/>
                <path opacity="0.29" d="M434.336 58.9005V42.824C434.336 42.3511 433.864 41.8783 433.391 41.8783C432.918 41.8783 432.445 42.3511 432.445 42.824V58.9005C432.445 59.3733 432.918 59.8461 433.391 59.8461C433.864 59.8461 434.336 59.3733 434.336 58.9005Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M414 18H422.04V135.737H414V18Z" fill="#054705"/>
                <path opacity="0.2" d="M422.04 18H430.08V135.737H422.04V18Z" fill="#054705"/>
                <path d="M596.269 135.736V8.77875L620.388 8.77875V135.736H596.269Z" fill="#D04B32"/>
                <path d="M596.321 111.59H620.44V120.81H596.321V111.59Z" fill="#932F22"/>
                <path d="M596.321 28.8431H620.44V38.0635H596.321V28.8431Z" fill="#932F22"/>
                <path opacity="0.3" d="M617.366 36.8815V20.805C617.366 20.3322 616.893 19.8593 616.42 19.8593C615.947 19.8593 615.474 20.3322 615.474 20.805V36.8815C615.474 37.3543 615.947 37.8272 616.42 37.8272C616.893 37.8272 617.366 37.5907 617.366 36.8815Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M596.321 8.74762H604.361V135.705H596.321V8.74762Z" fill="#9D1604"/>
                <path opacity="0.3" d="M604.124 8.74762H612.164V135.705H604.124V8.74762Z" fill="#A11C0E"/>
                <path d="M547.527 135.798V18.0612L570.464 18.0612V135.798H547.527Z" fill="#1F8949"/>
                <g opacity="0.7">
                    <path d="M547.925 50.9341V28.9472L570.152 28.9472V50.9341H547.925Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M551.866 50.8301L555.649 39.9548L551.866 28.8431L548.083 39.9548L551.866 50.8301Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M556.596 50.8301L560.379 39.9548L556.596 28.8431L552.812 39.9548L556.596 50.8301Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M561.561 50.8301L565.108 39.9548L561.561 28.8431L557.541 39.9548L561.561 50.8301Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M566.29 50.8301L570.074 39.9548L566.29 28.8431L562.507 39.9548L566.29 50.8301Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M547.825 77.04V55.053L570.052 55.053V77.04H547.825Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M551.867 77.0726L555.65 65.9609L551.867 55.0856L548.083 65.9609L551.867 77.0726Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M556.596 77.0726L560.379 65.9609L556.596 55.0856L552.812 65.9609L556.596 77.0726Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M561.561 77.0726L565.108 65.9609L561.561 55.0856L557.541 65.9609L561.561 77.0726Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M566.29 77.0728L570.074 65.9611L566.29 55.0858L562.507 65.9611L566.29 77.0728Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M547.961 103.146V81.1591H570.188V103.146H547.961Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M551.866 103.079L555.649 92.2034L551.866 81.0917L548.082 92.2034L551.866 103.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M556.596 103.079L560.379 92.2034L556.596 81.0917L552.812 92.2034L556.596 103.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M561.56 103.079L565.107 92.2034L561.56 81.0917L557.541 92.2034L561.56 103.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M566.289 103.079L570.073 92.2034L566.289 81.0917L562.506 92.2034L566.289 103.079Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path opacity="0.2" d="M547.61 113.008H570.546V119.155H547.61V113.008Z" fill="#054705"/>
                <path opacity="0.29" d="M567.709 58.8683V42.7918C567.709 42.319 567.237 41.8461 566.764 41.8461C566.291 41.8461 565.818 42.319 565.818 42.7918V58.8683C565.818 59.3411 566.291 59.814 566.764 59.814C567.237 59.814 567.709 59.3411 567.709 58.8683Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M547.373 17.9678H555.413V135.704H547.373V17.9678Z" fill="#054705"/>
                <path opacity="0.2" d="M555.413 17.9678H563.453V135.704H555.413V17.9678Z" fill="#054705"/>
                <path d="M570.694 135.584V0.116394L596.468 0.116394V135.584H570.694Z" fill="#1F8949"/>
                <path opacity="0.4" d="M589.937 0V135.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M585.444 0V135.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M581.187 0V135.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.4" d="M576.931 0V135.704" stroke="#0B560B" strokeMiterlimit="10"/>
                <path opacity="0.29" d="M591.828 32.6258V16.5493C591.828 16.0765 591.355 15.6036 590.882 15.6036C590.409 15.6036 589.936 16.0765 589.936 16.5493V32.6258C589.936 33.0986 590.409 33.5715 590.882 33.5715C591.355 33.5715 591.828 33.0986 591.828 32.6258Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M570.547 0H578.587V135.468H570.547V0Z" fill="#054705"/>
                <path opacity="0.2" d="M578.587 0H586.626V135.468H578.587V0Z" fill="#054705"/>
                <path d="M451.268 407.471V319.272H429.473V407.471H451.268Z" fill="#D04B32"/>
                <path d="M440.31 342.413L437.612 333.49L440.31 329.754L442.801 333.49L440.31 342.413Z" fill="#932F22"/>
                <path d="M440.518 342.413L443.631 333.489L447.782 332.037V336.602L440.518 342.413Z" fill="#932F22"/>
                <path d="M439.895 342.413L436.989 333.489L432.63 332.037V336.602L439.895 342.413Z" fill="#932F22"/>
                <path d="M447.99 346.356H432.63V357.148H447.99V346.356Z" fill="#932F22"/>
                <path d="M447.99 389.107H432.63V394.502H447.99V389.107Z" fill="#932F22"/>
                <path opacity="0.3" d="M432.63 350.922V336.81C432.63 336.395 433.046 335.98 433.461 335.98C433.876 335.98 434.291 336.395 434.291 336.81V350.922C434.291 351.337 433.876 351.752 433.461 351.752C433.046 351.752 432.63 351.337 432.63 350.922Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M451.311 319.378H444.254V407.577H451.311V319.378Z" fill="#9D1604"/>
                <path opacity="0.3" d="M444.253 319.378H437.196V407.577H444.253V319.378Z" fill="#A11C0E"/>
                <path d="M525.579 135.471V47.2725L547.373 47.2725V135.471H525.579Z" fill="#D04B32"/>
                <path d="M536.536 70.4133L539.234 61.4897L536.536 57.7542L534.045 61.4897L536.536 70.4133Z" fill="#932F22"/>
                <path d="M536.329 70.4133L533.215 61.4896L529.064 60.0369V64.6025L536.329 70.4133Z" fill="#932F22"/>
                <path d="M536.951 70.4133L539.857 61.4896L544.216 60.0369V64.6025L536.951 70.4133Z" fill="#932F22"/>
                <path d="M528.856 74.3563H544.216V85.1477H528.856V74.3563Z" fill="#932F22"/>
                <path d="M528.856 117.107H544.216V122.503H528.856V117.107Z" fill="#932F22"/>
                <path opacity="0.3" d="M544.216 78.9219V64.8101C544.216 64.395 543.801 63.98 543.386 63.98C542.97 63.98 542.555 64.395 542.555 64.8101V78.9219C542.555 79.337 542.97 79.752 543.386 79.752C543.801 79.752 544.216 79.337 544.216 78.9219Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M525.535 47.3778H532.592V135.577H525.535V47.3778Z" fill="#9D1604"/>
                <path opacity="0.3" d="M532.593 47.3778H539.65V135.577H532.593V47.3778Z" fill="#A11C0E"/>
                <path d="M327.992 135.486V59.5494H307.567V135.486H327.992Z" fill="#D04B32"/>
                <path d="M317.724 79.473L315.195 71.79L317.724 68.5739L320.058 71.79L317.724 79.473Z" fill="#932F22"/>
                <path d="M317.918 79.473L320.836 71.79L324.726 70.5392V74.4701L317.918 79.473Z" fill="#932F22"/>
                <path d="M317.335 79.473L314.612 71.79L310.527 70.5392V74.4701L317.335 79.473Z" fill="#932F22"/>
                <path d="M324.922 82.8678H310.527V92.1589H324.922V82.8678Z" fill="#932F22"/>
                <path d="M324.922 119.675H310.527V124.32H324.922V119.675Z" fill="#932F22"/>
                <path opacity="0.3" d="M310.527 86.7987V74.6488C310.527 74.2915 310.916 73.9341 311.305 73.9341C311.694 73.9341 312.083 74.2915 312.083 74.6488V86.7987C312.083 87.156 311.694 87.5134 311.305 87.5134C310.916 87.5134 310.527 87.156 310.527 86.7987Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M328.034 59.6401H321.42V135.577H328.034V59.6401Z" fill="#9D1604"/>
                <path opacity="0.3" d="M321.419 59.6401H314.805V135.577H321.419V59.6401Z" fill="#A11C0E"/>
                <path d="M391.599 135.471V47.2725L413.393 47.2725V135.471H391.599Z" fill="#D04B32"/>
                <path d="M402.556 70.4133L405.254 61.4897L402.556 57.7542L400.065 61.4897L402.556 70.4133Z" fill="#932F22"/>
                <path d="M402.348 70.4133L399.235 61.4896L395.083 60.0369V64.6025L402.348 70.4133Z" fill="#932F22"/>
                <path d="M402.971 70.4133L405.876 61.4896L410.235 60.0369V64.6025L402.971 70.4133Z" fill="#932F22"/>
                <path d="M394.876 74.3563H410.235V85.1477H394.876V74.3563Z" fill="#932F22"/>
                <path d="M394.876 117.107H410.235V122.503H394.876V117.107Z" fill="#932F22"/>
                <path opacity="0.3" d="M410.235 78.9219V64.8101C410.235 64.395 409.82 63.98 409.405 63.98C408.99 63.98 408.575 64.395 408.575 64.8101V78.9219C408.575 79.337 408.99 79.752 409.405 79.752C409.82 79.752 410.235 79.337 410.235 78.9219Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M391.555 47.3778H398.612V135.577H391.555V47.3778Z" fill="#9D1604"/>
                <path opacity="0.3" d="M398.613 47.3778H405.67V135.577H398.613V47.3778Z" fill="#A11C0E"/>
                <path d="M472.33 407.507V296.065H451.158V407.507H472.33Z" fill="#1F8949"/>
                <path opacity="0.4" d="M472.275 386.409H451.104V394.502H472.275V386.409Z" fill="#054705"/>
                <path opacity="0.4" d="M472.275 313.775H451.104V321.868H472.275V313.775Z" fill="#054705"/>
                <path opacity="0.29" d="M453.801 320.831V306.926C453.801 306.511 454.216 306.096 454.632 306.096C455.047 306.096 455.462 306.511 455.462 306.926V321.038C455.462 321.453 455.047 321.868 454.632 321.868C454.216 321.661 453.801 321.246 453.801 320.831Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M472.483 295.927H465.426V407.369H472.483V295.927Z" fill="#054705"/>
                <path opacity="0.2" d="M465.425 295.927H458.368V407.369H465.425V295.927Z" fill="#054705"/>
                <path d="M504.517 135.507V24.0649L525.688 24.0649V135.507H504.517Z" fill="#1F8949"/>
                <path opacity="0.4" d="M504.571 114.409H525.743V122.502H504.571V114.409Z" fill="#054705"/>
                <path opacity="0.4" d="M504.571 41.7746H525.743V49.8681H504.571V41.7746Z" fill="#054705"/>
                <path opacity="0.29" d="M523.045 48.8305V34.9262C523.045 34.5111 522.63 34.0961 522.215 34.0961C521.8 34.0961 521.384 34.5111 521.384 34.9262V49.038C521.384 49.453 521.8 49.8681 522.215 49.8681C522.63 49.6606 523.045 49.2455 523.045 48.8305Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M504.363 23.9272H511.42V135.369H504.363V23.9272Z" fill="#054705"/>
                <path opacity="0.2" d="M511.421 23.9272H518.479V135.369H511.421V23.9272Z" fill="#054705"/>
                <path d="M347.732 135.517V39.5685L327.891 39.5685V135.517H347.732Z" fill="#1F8949"/>
                <path opacity="0.4" d="M347.681 117.352H327.839V124.32H347.681V117.352Z" fill="#054705"/>
                <path opacity="0.4" d="M347.681 54.816H327.839V61.7843H347.681V54.816Z" fill="#054705"/>
                <path opacity="0.29" d="M330.368 60.8908V48.9197C330.368 48.5623 330.757 48.205 331.146 48.205C331.535 48.205 331.924 48.5623 331.924 48.9197V61.0695C331.924 61.4268 331.535 61.7842 331.146 61.7842C330.757 61.6055 330.368 61.2482 330.368 60.8908Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M347.876 39.45H341.262V135.398H347.876V39.45Z" fill="#054705"/>
                <path opacity="0.2" d="M341.261 39.45H334.647V135.398H341.261V39.45Z" fill="#054705"/>
                <path d="M370.537 135.507V24.0649L391.709 24.0649V135.507H370.537Z" fill="#1F8949"/>
                <path opacity="0.4" d="M370.592 114.409H391.763V122.502H370.592V114.409Z" fill="#054705"/>
                <path opacity="0.4" d="M370.592 41.7746H391.763V49.8681H370.592V41.7746Z" fill="#054705"/>
                <path opacity="0.29" d="M389.065 48.8305V34.9262C389.065 34.5111 388.65 34.0961 388.235 34.0961C387.82 34.0961 387.405 34.5111 387.405 34.9262V49.038C387.405 49.453 387.82 49.8681 388.235 49.8681C388.65 49.6606 389.065 49.2455 389.065 48.8305Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M370.383 23.9272H377.44V135.369H370.383V23.9272Z" fill="#054705"/>
                <path opacity="0.2" d="M377.442 23.9272H384.499V135.369H377.442V23.9272Z" fill="#054705"/>
                <path d="M515.114 407.561V304.213H494.981V407.561H515.114Z" fill="#1F8949"/>
                <g opacity="0.7">
                    <path d="M514.765 333.068V313.768H495.254V333.068H514.765Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M511.298 333.074L508.184 323.528L511.298 313.774L514.619 323.528L511.298 333.074Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M507.145 333.074L503.824 323.528L507.145 313.774L510.466 323.528L507.145 333.074Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M502.995 333.074L499.674 323.528L502.995 313.774L506.316 323.528L502.995 333.074Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M498.636 333.074L495.315 323.528L498.636 313.774L501.957 323.528L498.636 333.074Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M514.854 355.984V336.684H495.342V355.984H514.854Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M511.298 355.902L508.184 346.356L511.298 336.602L514.619 346.356L511.298 355.902Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M507.146 355.902L503.825 346.356L507.146 336.602L510.467 346.356L507.146 355.902Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M502.993 355.902L499.672 346.356L502.993 336.602L506.314 346.356L502.993 355.902Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M498.635 355.902L495.314 346.356L498.635 336.602L501.956 346.356L498.635 355.902Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M514.941 378.9V359.6H495.43V378.9H514.941Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M511.298 378.938L508.184 369.184L511.298 359.638L514.619 369.184L511.298 378.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M507.146 378.938L503.825 369.184L507.146 359.638L510.467 369.184L507.146 378.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M502.993 378.938L499.672 369.184L502.993 359.638L506.314 369.184L502.993 378.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M498.635 378.938L495.314 369.184L498.635 359.638L501.956 369.184L498.635 378.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                    <path opacity="0.2" d="M515.033 387.654H494.899V393.05H515.033V387.654Z" fill="#054705"/>
                    <path opacity="0.29" d="M497.391 340.13V326.019C497.391 325.604 497.806 325.188 498.221 325.188C498.636 325.188 499.051 325.604 499.051 326.019V340.13C499.051 340.545 498.636 340.96 498.221 340.96C497.806 340.96 497.391 340.545 497.391 340.13Z" fill="#3EC16D"/>
                    <path opacity="0.4" d="M515.24 304.228H508.183V407.577H515.24V304.228Z" fill="#054705"/>
                    <path opacity="0.2" d="M508.183 304.228H501.125V407.577H508.183V304.228Z" fill="#054705"/>
                    <path d="M461.732 135.561V32.2129L481.866 32.2129V135.561H461.732Z" fill="#1F8949"/>
                <g opacity="0.7">
                    <path d="M462.082 61.0682V41.7682L481.593 41.7682V61.0682H462.082Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M465.549 61.0745L468.663 51.5283L465.549 41.7745L462.228 51.5283L465.549 61.0745Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M469.701 61.0745L473.022 51.5283L469.701 41.7745L466.38 51.5283L469.701 61.0745Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M473.852 61.0745L477.173 51.5283L473.852 41.7745L470.531 51.5283L473.852 61.0745Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M478.211 61.0746L481.532 51.5283L478.211 41.7746L474.89 51.5283L478.211 61.0746Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M461.993 83.9839V64.684H481.504V83.9839H461.993Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M465.549 83.9024L468.663 74.3562L465.549 64.6024L462.228 74.3562L465.549 83.9024Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M469.7 83.9024L473.021 74.3562L469.7 64.6024L466.379 74.3562L469.7 83.9024Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M473.853 83.9024L477.174 74.3562L473.853 64.6024L470.532 74.3562L473.853 83.9024Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M478.212 83.9024L481.533 74.3562L478.212 64.6024L474.891 74.3562L478.212 83.9024Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g opacity="0.7">
                    <path d="M461.906 106.9V87.5996H481.417V106.9H461.906Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10"/>
                    <path d="M465.549 106.938L468.663 97.1841L465.549 87.6379L462.228 97.1841L465.549 106.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M469.7 106.938L473.021 97.1841L469.7 87.6379L466.379 97.1841L469.7 106.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M473.853 106.938L477.174 97.1841L473.853 87.6379L470.532 97.1841L473.853 106.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M478.212 106.938L481.533 97.1843L478.212 87.6381L474.891 97.1843L478.212 106.938Z" stroke="#F9E5D0" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path opacity="0.2" d="M461.814 115.654H481.948V121.05H461.814V115.654Z" fill="#054705"/>
                <path opacity="0.29" d="M479.456 68.1304V54.0186C479.456 53.6035 479.041 53.1885 478.626 53.1885C478.211 53.1885 477.796 53.6035 477.796 54.0186V68.1304C477.796 68.5454 478.211 68.9605 478.626 68.9605C479.041 68.9605 479.456 68.5454 479.456 68.1304Z" fill="#3EC16D"/>
                <path opacity="0.4" d="M461.607 32.2283H468.664V135.577H461.607V32.2283Z" fill="#054705"/>
                <path opacity="0.2" d="M468.664 32.2283H475.721V135.577H468.664V32.2283Z" fill="#054705"/>
                <path d="M494.988 407.374V288.461H472.364V407.374H494.988Z" fill="#D04B32"/>
                <path d="M477.879 288.456V407.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M481.824 288.456V407.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M485.559 288.456V407.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M489.296 288.456V407.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path opacity="0.3" d="M476.219 317.095V302.983C476.219 302.568 476.634 302.153 477.05 302.153C477.465 302.153 477.88 302.568 477.88 302.983V317.095C477.88 317.51 477.465 317.925 477.05 317.925C476.634 317.925 476.219 317.51 476.219 317.095Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M494.899 288.456H487.842V407.369H494.899V288.456Z" fill="#9D1604"/>
                <path opacity="0.3" d="M488.049 288.456H480.992V407.369H488.049V288.456Z" fill="#A11C0E"/>
                <path d="M481.857 135.374V16.461L504.481 16.461V135.374H481.857Z" fill="#D04B32"/>
                <path d="M498.966 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M495.021 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M491.287 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M487.549 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path opacity="0.3" d="M500.626 45.095V30.9832C500.626 30.5681 500.211 30.1531 499.796 30.1531C499.381 30.1531 498.965 30.5681 498.965 30.9832V45.095C498.965 45.51 499.381 45.9251 499.796 45.9251C500.211 45.9251 500.626 45.51 500.626 45.095Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M481.946 16.4563H489.003V135.369H481.946V16.4563Z" fill="#9D1604"/>
                <path opacity="0.3" d="M488.796 16.4563H495.854V135.369H488.796V16.4563Z" fill="#A11C0E"/>
                <path d="M347.877 135.374V16.461L370.502 16.461V135.374H347.877Z" fill="#D04B32"/>
                <path d="M364.986 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M361.042 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M357.307 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path d="M353.57 16.4563V135.369" stroke="#932F22" strokeMiterlimit="10"/>
                <path opacity="0.3" d="M366.646 45.095V30.9832C366.646 30.5681 366.231 30.1531 365.816 30.1531C365.401 30.1531 364.986 30.5681 364.986 30.9832V45.095C364.986 45.51 365.401 45.9251 365.816 45.9251C366.231 45.9251 366.646 45.51 366.646 45.095Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M347.967 16.4563H355.024V135.369H347.967V16.4563Z" fill="#9D1604"/>
                <path opacity="0.3" d="M354.817 16.4563H361.874V135.369H354.817V16.4563Z" fill="#A11C0E"/>
                <path d="M661.803 443.654H4.42318C2.03227 443.654 0 441.622 0 439.231V410.54C0 408.149 2.03227 406.117 4.42318 406.117H661.803C664.194 406.117 666.226 408.149 666.226 410.54V439.231C666.226 441.622 664.194 443.654 661.803 443.654Z" fill="#6A2E18"/>
                <path d="M49.2529 508.328V429.309C49.2529 426.918 51.2852 424.886 53.6761 424.886H82.367C84.7579 424.886 86.7902 426.918 86.7902 429.309V508.328C86.7902 518.729 78.422 527.097 68.0216 527.097C57.6211 527.097 49.2529 518.729 49.2529 508.328Z" fill="#6A2E18"/>
                <path d="M579.437 508.328V429.309C579.437 426.918 581.469 424.886 583.86 424.886H612.551C614.942 424.886 616.974 426.918 616.974 429.309V508.328C616.974 518.729 608.606 527.097 598.205 527.097C587.805 527.097 579.437 518.729 579.437 508.328Z" fill="#6A2E18"/>
                <path d="M661.803 443.654H4.42318C2.03227 443.654 0 441.622 0 439.231V432.895H666.226V439.231C666.226 441.622 664.194 443.654 661.803 443.654Z" fill="#522011"/>
                <path opacity="0.19" d="M661.803 454.414H4.42318C2.03227 454.414 0 452.381 0 449.99V443.654H666.226V449.99C666.226 452.381 664.194 454.414 661.803 454.414Z" fill="#432822"/>
                <path d="M68.0215 472.943C71.1245 472.943 73.6401 470.427 73.6401 467.324C73.6401 464.221 71.1245 461.706 68.0215 461.706C64.9184 461.706 62.4028 464.221 62.4028 467.324C62.4028 470.427 64.9184 472.943 68.0215 472.943Z" fill="#B97F46"/>
                <path d="M68.0215 502.112C71.1245 502.112 73.6401 499.596 73.6401 496.493C73.6401 493.39 71.1245 490.875 68.0215 490.875C64.9184 490.875 62.4028 493.39 62.4028 496.493C62.4028 499.596 64.9184 502.112 68.0215 502.112Z" fill="#B97F46"/>
                <path d="M598.205 472.943C601.308 472.943 603.824 470.427 603.824 467.324C603.824 464.221 601.308 461.706 598.205 461.706C595.102 461.706 592.586 464.221 592.586 467.324C592.586 470.427 595.102 472.943 598.205 472.943Z" fill="#B97F46"/>
                <path d="M598.205 502.112C601.308 502.112 603.824 499.596 603.824 496.493C603.824 493.39 601.308 490.875 598.205 490.875C595.102 490.875 592.586 493.39 592.586 496.493C592.586 499.596 595.102 502.112 598.205 502.112Z" fill="#B97F46"/>
                <path d="M118.708 318.012H48.5352V406.117H118.708V318.012Z" fill="#742D12"/>
                <path d="M105.199 334.988H62.1631V389.022H105.199V334.988Z" fill="#FBDEDA"/>
                <path d="M570.59 362.244C571.905 368.699 568.797 374.796 563.656 375.992C558.516 377.068 553.136 372.764 551.821 366.309C550.506 359.853 547.039 322.674 552.18 321.479C557.44 320.284 569.275 355.789 570.59 362.244Z" fill="#1A6E31"/>
                <path d="M579.675 366.069C578.48 372.525 573.22 377.068 568.079 376.111C562.819 375.155 559.592 369.058 560.787 362.603C561.983 356.147 572.981 320.403 578.241 321.36C583.501 322.316 580.871 359.495 579.675 366.069Z" fill="#1A6E31"/>
                <path d="M563.895 357.223C566.525 362.603 564.732 368.819 559.95 371.21C555.168 373.481 549.191 370.971 546.561 365.591C543.931 360.212 533.172 327.934 537.954 325.663C542.736 323.272 561.265 351.724 563.895 357.223Z" fill="#1F8949"/>
                <path d="M566.286 357.223C563.656 362.603 565.449 368.819 570.231 371.21C575.013 373.481 580.99 370.971 583.62 365.591C586.25 360.212 597.009 327.934 592.227 325.663C587.445 323.392 568.916 351.724 566.286 357.223Z" fill="#1F8949"/>
                <path d="M574.654 357.223C574.654 363.798 570.35 369.178 564.971 369.178C559.711 369.178 555.407 363.798 555.407 357.223C555.407 350.648 559.83 313.47 565.09 313.47C570.35 313.47 574.654 350.648 574.654 357.223Z" fill="#1F8949"/>
                <path d="M581.468 406.117H548.115L539.986 364.515H590.075L581.468 406.117Z" fill="#B95A31"/>
                <path d="M592.825 357.104H537.356V369.178H592.825V357.104Z" fill="#742D12"/>
                <path d="M588.282 373.362H541.779L542.257 375.753H587.685L588.282 373.362Z" fill="#F6EEE3"/>
                <path d="M587.446 376.948H542.497L542.975 379.339H586.967L587.446 376.948Z" fill="#F6EEE3"/>
                <path d="M661.803 172.85H4.42318C2.03227 172.85 0 170.818 0 168.427V139.736C0 137.345 2.03227 135.313 4.42318 135.313H661.803C664.194 135.313 666.226 137.345 666.226 139.736V168.427C666.226 170.818 664.194 172.85 661.803 172.85Z" fill="#6A2E18"/>
                <path d="M49.2529 237.524V158.504C49.2529 156.113 51.2852 154.081 53.6761 154.081H82.367C84.7579 154.081 86.7902 156.113 86.7902 158.504V237.524C86.7902 247.924 78.422 256.292 68.0216 256.292C57.6211 256.292 49.2529 247.924 49.2529 237.524Z" fill="#6A2E18"/>
                <path d="M579.437 237.524V158.504C579.437 156.113 581.469 154.081 583.86 154.081H612.551C614.942 154.081 616.974 156.113 616.974 158.504V237.524C616.974 247.924 608.606 256.292 598.205 256.292C587.805 256.292 579.437 247.924 579.437 237.524Z" fill="#6A2E18"/>
                <path d="M661.803 172.85H4.42318C2.03227 172.85 0 170.818 0 168.427V162.091H666.226V168.427C666.226 170.818 664.194 172.85 661.803 172.85Z" fill="#522011"/>
                <path opacity="0.19" d="M661.803 183.609H4.42318C2.03227 183.609 0 181.577 0 179.186V172.85H666.226V179.186C666.226 181.577 664.194 183.609 661.803 183.609Z" fill="#432822"/>
                <path d="M68.0215 202.138C71.1245 202.138 73.6401 199.623 73.6401 196.52C73.6401 193.417 71.1245 190.901 68.0215 190.901C64.9184 190.901 62.4028 193.417 62.4028 196.52C62.4028 199.623 64.9184 202.138 68.0215 202.138Z" fill="#B97F46"/>
                <path d="M68.0215 231.308C71.1245 231.308 73.6401 228.792 73.6401 225.689C73.6401 222.586 71.1245 220.07 68.0215 220.07C64.9184 220.07 62.4028 222.586 62.4028 225.689C62.4028 228.792 64.9184 231.308 68.0215 231.308Z" fill="#B97F46"/>
                <path d="M598.205 202.138C601.308 202.138 603.824 199.623 603.824 196.52C603.824 193.417 601.308 190.901 598.205 190.901C595.102 190.901 592.586 193.417 592.586 196.52C592.586 199.623 595.102 202.138 598.205 202.138Z" fill="#B97F46"/>
                <path d="M598.205 231.308C601.308 231.308 603.824 228.792 603.824 225.689C603.824 222.586 601.308 220.07 598.205 220.07C595.102 220.07 592.586 222.586 592.586 225.689C592.586 228.792 595.102 231.308 598.205 231.308Z" fill="#B97F46"/>
                <path d="M318.994 407.185L331.871 343.219L315.876 340L303 403.966L318.994 407.185Z" fill="#D04B32"/>
                <path d="M320.541 358.376L319.832 351.52L322.433 349.155L323.852 352.229L320.541 358.376Z" fill="#932F22"/>
                <path d="M320.778 358.376L324.325 352.465L327.635 351.992L326.926 355.302L320.778 358.376Z" fill="#932F22"/>
                <path d="M320.304 358.376L319.358 351.52L316.521 349.628L315.812 352.938L320.304 358.376Z" fill="#932F22"/>
                <path d="M325.433 362.411L314.306 360.172L312.72 368.052L323.847 370.291L325.433 362.411Z" fill="#932F22"/>
                <path d="M319.153 393.333L308.026 391.094L307.233 395.034L318.36 397.273L319.153 393.333Z" fill="#932F22"/>
                <path opacity="0.3" d="M313.684 363.341L315.812 353.175C315.812 352.938 316.285 352.702 316.521 352.702C316.758 352.702 316.994 353.175 316.994 353.411L314.866 363.577C314.866 363.814 314.393 364.05 314.157 364.05C313.92 364.05 313.684 363.814 313.684 363.341Z" fill="#DF9E95"/>
                <path opacity="0.4" d="M331.862 343.235L326.762 342.209L313.886 406.175L318.985 407.201L331.862 343.235Z" fill="#9D1604"/>
                <path opacity="0.3" d="M326.694 342.033L321.594 341.007L308.718 404.973L313.817 405.999L326.694 342.033Z" fill="#A11C0E"/>
                <g clipPath="url(#clip0_483_2694)">
                    <path d="M99.0281 37.1694C99.0281 37.1694 99.3863 80.0673 81.1157 90.7918" stroke="#3C7E53" strokeMiterlimit="10"/>
                    <path d="M56.3965 31.4496C56.3965 31.4496 56.0383 74.3476 74.3088 85.0721" stroke="#3C7E53" strokeMiterlimit="10"/>
                    <path d="M50.6644 28.5898C49.7688 27.3386 50.3062 25.7299 51.7392 25.1937C53.1721 24.3 54.9634 24.6575 55.6799 25.9087C56.5755 27.1599 56.9337 29.6622 55.5007 30.3772C54.0678 31.2709 51.3809 29.6623 50.6644 28.5898Z" fill="#D45744"/>
                    <path d="M51.7392 33.952C50.1271 34.1308 48.6941 33.0583 48.515 31.6284C48.3359 30.1984 49.4106 28.9473 51.2018 28.7685C52.814 28.5898 55.6799 29.3047 55.8591 30.7347C56.0382 32.1646 53.3513 33.7733 51.7392 33.952Z" fill="#D45744"/>
                    <path d="M56.7549 36.6331C56.0384 37.8843 54.2472 38.4206 52.8142 37.8843C51.3812 37.1694 50.6647 35.5607 51.3812 34.3095C52.0977 33.0583 54.4263 31.2709 55.8593 31.9859C57.2923 32.7008 57.4714 35.3819 56.7549 36.6331Z" fill="#D45744"/>
                    <path d="M62.4867 33.4158C63.5614 34.4882 63.3823 36.0969 62.1284 36.9906C60.8746 37.8843 58.9042 37.7056 58.0086 36.6331C57.113 35.5607 56.0382 33.0583 57.4712 32.1646C58.546 31.2709 61.5911 32.3433 62.4867 33.4158Z" fill="#D45744"/>
                    <path d="M54.6053 26.4449C54.7844 25.015 56.3965 24.1213 58.0086 24.3C59.6207 24.4787 60.6955 25.7299 60.5163 27.1599C60.3372 28.5898 58.7251 30.7347 57.113 30.556C55.3218 30.3772 54.247 27.8748 54.6053 26.4449Z" fill="#D45744"/>
                    <path d="M59.4414 27.3386C60.8743 26.6236 62.6656 27.1599 63.3821 28.4111C64.0986 29.6622 63.5612 31.2709 62.1282 31.8071C60.6952 32.3434 57.6501 32.7008 56.9336 31.4497C56.2171 30.1985 58.0084 28.0536 59.4414 27.3386Z" fill="#D45744"/>
                    <path d="M93.8334 34.8457C93.1169 33.7733 93.4752 32.5221 94.7291 31.8071C95.9829 31.0921 97.595 31.6284 98.3115 32.7008C99.028 33.7733 99.3863 35.9182 98.1324 36.6331C96.8785 37.1694 94.5499 35.9182 93.8334 34.8457Z" fill="#D45744"/>
                    <path d="M94.7288 39.493C93.2958 39.6718 92.0419 38.7781 91.8628 37.5269C91.6837 36.2757 92.7584 35.2032 94.1914 35.0245C95.6244 34.8458 98.1321 35.5607 98.3112 36.8119C98.4904 38.0631 96.1618 39.3143 94.7288 39.493Z" fill="#D45744"/>
                    <path d="M99.207 41.1017C98.6696 42.1741 97.0575 42.7104 95.8036 42.1741C94.5498 41.6379 94.0124 40.3867 94.5498 39.3143C95.0871 38.2418 97.0575 36.6332 98.4905 37.1694C99.7444 37.7056 99.7444 40.0292 99.207 41.1017Z" fill="#D45744"/>
                    <path d="M104.043 38.5993C104.939 39.493 104.76 40.9229 103.685 41.6379C102.61 42.3529 100.998 42.1741 100.103 41.2804C99.2072 40.3867 98.4907 38.2418 99.5654 37.3481C100.64 36.8119 103.148 37.7056 104.043 38.5993Z" fill="#D45744"/>
                    <path d="M97.2366 33.0583C97.4157 31.8071 98.6696 31.0922 100.103 31.2709C101.536 31.4496 102.61 32.5221 102.431 33.7733C102.252 35.0245 100.819 36.8119 99.3861 36.6331C97.9531 36.4544 97.0575 34.3095 97.2366 33.0583Z" fill="#D45744"/>
                    <path d="M101.536 33.7733C102.79 33.2371 104.402 33.5945 104.939 34.667C105.476 35.7394 105.118 36.9906 103.864 37.7056C102.61 38.4206 99.9236 38.4206 99.3862 37.3481C98.6697 36.2757 100.282 34.3095 101.536 33.7733Z" fill="#D45744"/>
                    <path d="M93.1169 82.7485C95.0873 89.0044 90.4301 94.9029 82.7278 95.9754C75.0255 97.0478 66.9649 92.758 64.9945 86.6808C63.0242 80.6036 57.8296 44.6766 65.5319 43.7829C73.2342 42.5317 90.9674 76.4925 93.1169 82.7485Z" fill="#2F6542"/>
                    <path d="M78.0704 72.9177C84.5188 74.5263 87.0266 81.4973 83.8024 88.6469C80.5781 95.7966 72.8758 100.265 66.4274 98.8352C59.979 97.2265 27.0203 82.7484 30.0654 75.5988C33.1105 68.4491 71.622 71.309 78.0704 72.9177Z" fill="#2F6542"/>
                    <path d="M91.8629 72.9177C85.4145 74.3476 82.9068 81.4973 86.131 88.6469C89.3552 95.7966 97.0575 100.265 103.506 98.8352C109.954 97.2265 142.913 82.7484 139.868 75.5988C136.465 68.4491 98.1322 71.309 91.8629 72.9177Z" fill="#2F6542"/>
                    <path d="M106.551 86.502C104.76 92.758 96.8782 97.0478 89.1759 96.1541C81.2945 95.2603 76.4582 89.3619 78.2494 83.1059C80.0406 76.85 96.52 42.5316 104.401 43.6041C112.283 44.6765 108.342 80.2461 106.551 86.502Z" fill="#2F6542"/>
                    <path d="M82.9066 77.9224C86.8473 83.1059 84.1605 89.1832 76.9955 91.3281C69.8306 93.4729 60.8744 91.1493 56.9337 85.9658C52.993 80.7823 36.8719 49.86 44.0368 47.7151C51.2018 45.5702 78.9659 72.7389 82.9066 77.9224Z" fill="#52A170"/>
                    <path d="M86.4893 77.9224C82.5485 83.1059 85.2354 89.1832 92.4003 91.3281C99.5653 93.4729 108.521 91.1493 112.462 85.9658C116.403 80.7823 132.524 49.86 125.359 47.7151C118.194 45.5702 90.43 72.7389 86.4893 77.9224Z" fill="#52A170"/>
                    <path d="M99.0278 77.9225C99.0278 84.1784 92.5794 89.3619 84.5188 89.3619C76.4583 89.3619 70.189 84.1784 70.189 77.9225C70.189 71.6665 76.8165 35.9182 84.698 35.9182C92.7585 35.9182 99.2069 71.6665 99.0278 77.9225Z" fill="#52A170"/>
                    <path d="M56.3965 33.4158C57.6825 33.4158 58.7251 32.5356 58.7251 31.4497C58.7251 30.3638 57.6825 29.4835 56.3965 29.4835C55.1104 29.4835 54.0679 30.3638 54.0679 31.4497C54.0679 32.5356 55.1104 33.4158 56.3965 33.4158Z" fill="#A49D22"/>
                    <path d="M99.0276 38.5993C99.918 38.5993 100.64 37.9591 100.64 37.1694C100.64 36.3796 99.918 35.7394 99.0276 35.7394C98.1373 35.7394 97.4155 36.3796 97.4155 37.1694C97.4155 37.9591 98.1373 38.5993 99.0276 38.5993Z" fill="#A49D22"/>
                    <path d="M100.103 135.477H69.2936C48.5153 135.477 31.4985 118.497 31.4985 97.7627V88.2894C31.4985 86.8595 32.7524 85.6083 34.1854 85.6083H135.211C136.644 85.6083 137.898 86.8595 137.898 88.2894V97.7627C137.898 118.497 120.881 135.477 100.103 135.477Z" fill="#B95A31"/>
                </g>
                <defs>
                    <clipPath id="clip0_483_2694">
                        <rect width="109.982" height="111.177" fill="white" transform="translate(29.8862 24.3)"/>
                    </clipPath>
                </defs>
            </svg>
        )
    }

    return (
        <svg 
            width="100%"
            fill="none" 
            viewBox="0 0 667 528" 
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "",
                className
            )}
        >
            <path d="M197.353 389.238L267.207 389.238L267.207 387.519L197.353 387.519L197.353 389.238Z" fill="#FA5738"/>
            <path d="M197.353 406.213L267.207 406.213L267.207 404.494L197.353 404.494L197.353 406.213Z" fill="#FA5738"/>
            <path d="M142.829 406.232H205.563V387.575H142.829C141.847 387.575 141.11 388.312 141.11 389.294V404.391C141.11 405.373 141.847 406.232 142.829 406.232Z" fill="#FA5738"/>
            <path d="M203.105 404.514H261.542L261.297 402.55C260.805 398.745 260.805 395.063 261.297 391.258L261.542 389.294H203.105C201.018 389.294 199.422 390.889 199.422 392.976V400.832C199.422 402.796 201.018 404.514 203.105 404.514Z" fill="#F9F8F7"/>
            <path d="M199.422 393.344H261.051L261.174 392.117H199.545L199.422 392.73V393.344Z" fill="#EDE5DD"/>
            <path d="M260.928 396.29H199.422V397.518H260.928V396.29Z" fill="#EDE5DD"/>
            <path d="M199.422 401.323H261.174L261.051 400.095H199.422V401.323Z" fill="#EDE5DD"/>
            <path d="M154.987 406.195L177.699 406.195L177.699 387.537L154.987 387.537L154.987 406.195Z" fill="#E54A35"/>
            <path d="M146.813 406.195L151.233 406.195L151.233 387.537L146.813 387.537L146.813 406.195Z" fill="#E54A35"/>
            <path d="M188.447 406.195L192.866 406.195L192.866 387.537L188.447 387.537L188.447 406.195Z" fill="#E54A35"/>
            <path d="M186.417 406.195L186.908 406.195L186.908 387.537L186.417 387.537L186.417 406.195Z" fill="#E54A35"/>
            <path opacity="0.25" d="M199.422 395.185C199.422 395.185 199.3 402.305 234.656 404.514H205.561H202.86C202.86 404.514 199.422 404.514 199.422 400.341V395.185Z" fill="#A59A93"/>
            <path opacity="0.4" d="M199.424 400.095C199.424 400.709 199.424 399.359 199.424 399.973C199.179 404.391 202.862 404.514 202.862 404.514H205.072H267.314V406.232H142.829C141.11 406.11 141.11 404.514 141.11 404.514V400.095H199.424Z" fill="#AD1905"/>
            <path opacity="0.3" d="M141.063 400.046L199.377 400.046L199.377 395.259L141.063 395.259L141.063 400.046Z" fill="#C12110"/>
            <path opacity="0.5" d="M149.58 391.749H164.803C165.171 391.749 165.416 391.503 165.416 391.135V390.276C165.416 389.907 165.171 389.662 164.803 389.662H149.58C149.211 389.662 148.966 389.907 148.966 390.276V391.135C148.966 391.503 149.211 391.749 149.58 391.749Z" fill="#FFCCC5"/>
            <path d="M225.201 369H155.347V370.718H225.201V369Z" fill="#2B9C58"/>
            <path d="M225.201 385.939H155.347V387.657H225.201V385.939Z" fill="#2B9C58"/>
            <path d="M279.71 387.657H216.976V369H279.71C280.692 369 281.428 369.737 281.428 370.718V385.816C281.551 386.798 280.692 387.657 279.71 387.657Z" fill="#2B9C58"/>
            <path d="M219.431 385.939H160.995L161.24 383.975C161.731 380.17 161.731 376.488 161.24 372.682L160.995 370.719H219.431C221.518 370.719 223.114 372.314 223.114 374.401V382.257C223.114 384.22 221.518 385.939 219.431 385.939Z" fill="#F9F8F7"/>
            <path d="M238.583 371.946H227.166V384.589H238.583V371.946Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M251.473 371.946H240.056V384.589H251.473V371.946Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M277.253 371.946H265.836V384.589H277.253V371.946Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M238.583 374.278L232.813 376.365L227.166 374.278L232.813 372.069L238.583 374.278Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M238.583 376.978L232.813 379.065L227.166 376.978L232.813 374.769L238.583 376.978Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M238.583 379.679L232.813 381.765L227.166 379.679L232.813 377.469L238.583 379.679Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M238.583 382.379L232.813 384.589L227.166 382.379L232.813 380.293L238.583 382.379Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M251.473 374.278L245.826 376.365L240.056 374.278L245.826 372.069L251.473 374.278Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M251.473 376.978L245.826 379.065L240.056 376.978L245.826 374.769L251.473 376.978Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M251.473 379.679L245.826 381.765L240.056 379.679L245.826 377.469L251.473 379.679Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M251.473 382.379L245.826 384.589L240.056 382.379L245.826 380.293L251.473 382.379Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M264.486 371.946H253.069V384.589H264.486V371.946Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
            <path d="M264.363 374.278L258.715 376.365L252.945 374.278L258.715 372.069L264.363 374.278Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M264.363 376.978L258.715 379.065L252.945 376.978L258.715 374.769L264.363 376.978Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M264.363 379.679L258.715 381.765L252.945 379.679L258.715 377.469L264.363 379.679Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M264.363 382.379L258.715 384.589L252.945 382.379L258.715 380.293L264.363 382.379Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M277.253 374.278L271.606 376.365L265.836 374.278L271.606 372.069L277.253 374.278Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M277.253 376.978L271.606 379.065L265.836 376.978L271.606 374.769L277.253 376.978Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M277.253 379.679L271.606 381.765L265.836 379.679L271.606 377.469L277.253 379.679Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M277.253 382.379L271.606 384.589L265.836 382.379L271.606 380.293L277.253 382.379Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M223.114 374.769H161.486L161.363 373.542H222.991L223.114 374.155V374.769Z" fill="#EDE5DD"/>
            <path d="M223.114 377.715H161.608V378.942H223.114V377.715Z" fill="#EDE5DD"/>
            <path d="M223.114 382.748H161.485V381.52H223.114V382.748Z" fill="#EDE5DD"/>
            <path opacity="0.25" d="M223.114 376.61C223.114 376.61 223.237 383.729 187.88 385.939H216.853H219.677C219.677 385.939 223.114 385.939 223.114 381.766V376.61Z" fill="#97A393"/>
            <path opacity="0.4" d="M223.114 381.52C223.114 382.134 223.114 380.784 223.114 381.397C223.36 385.816 219.677 385.939 219.677 385.939H217.467H155.347V387.657H279.709C281.428 387.535 281.428 385.939 281.428 385.939V381.52H223.114Z" fill="#086608"/>
            <path opacity="0.2" d="M281.428 376.61H223.114V381.397H281.428V376.61Z" fill="#086608"/>
            <path opacity="0.29" d="M264.241 374.278H249.018C248.65 374.278 248.404 374.033 248.404 373.664V372.805C248.404 372.437 248.65 372.191 249.018 372.191H264.241C264.609 372.191 264.855 372.437 264.855 372.805V373.664C264.855 374.033 264.609 374.278 264.241 374.278Z" fill="#54E287"/>
            <path d="M380.577 407.736V280.779H356.458V407.736H380.577Z" fill="#FA5738"/>
            <path d="M380.525 383.59H356.406V392.81H380.525V383.59Z" fill="#DB4633"/>
            <path d="M380.525 300.843H356.406V310.063H380.525V300.843Z" fill="#DB4633"/>
            <path opacity="0.3" d="M359.48 308.881V292.805C359.48 292.332 359.953 291.859 360.426 291.859C360.899 291.859 361.372 292.332 361.372 292.805V308.881C361.372 309.354 360.899 309.827 360.426 309.827C359.953 309.827 359.48 309.591 359.48 308.881Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M380.525 280.747H372.485V407.704H380.525V280.747Z" fill="#AD1905"/>
            <path opacity="0.3" d="M372.722 280.747H364.682V407.704H372.722V280.747Z" fill="#C12110"/>
            <path d="M356.312 407.662V307.184H331.484V407.662H356.312Z" fill="#2B9C58"/>
            <path d="M343.874 333.469L340.8 323.303L343.874 319.047L346.948 323.303L343.874 333.469Z" fill="#247F5C"/>
            <path d="M344.347 333.469L347.657 323.303L352.623 321.648V326.849L344.347 333.469Z" fill="#247F5C"/>
            <path d="M343.637 333.469L340.327 323.303L335.361 321.648V326.849L343.637 333.469Z" fill="#247F5C"/>
            <path d="M352.859 337.961H335.361V350.255H352.859V337.961Z" fill="#247F5C"/>
            <path d="M352.859 386.663H335.361V392.81H352.859V386.663Z" fill="#247F5C"/>
            <path opacity="0.29" d="M335.361 343.162V327.086C335.361 326.613 335.834 326.14 336.307 326.14C336.78 326.14 337.253 326.613 337.253 327.086V343.162C337.253 343.635 336.78 344.108 336.307 344.108C335.597 344.108 335.361 343.635 335.361 343.162Z" fill="#54E287"/>
            <path opacity="0.4" d="M356.406 307.227H348.367V407.705H356.406V307.227Z" fill="#086608"/>
            <path opacity="0.2" d="M348.603 307.227H340.563V407.705H348.603V307.227Z" fill="#086608"/>
            <path d="M429.319 407.798V290.061H406.382V407.798H429.319Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M428.921 322.934V300.947H406.694V322.934H428.921Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M424.98 322.83L421.197 311.955L424.98 300.843L428.764 311.955L424.98 322.83Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M420.251 322.83L416.467 311.955L420.251 300.843L424.034 311.955L420.251 322.83Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M415.285 322.83L411.738 311.955L415.285 300.843L419.305 311.955L415.285 322.83Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M410.556 322.83L406.772 311.955L410.556 300.843L414.339 311.955L410.556 322.83Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M429.021 349.04V327.053H406.794V349.04H429.021Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M424.979 349.072L421.196 337.961L424.979 327.085L428.763 337.961L424.979 349.072Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M420.251 349.072L416.467 337.961L420.251 327.085L424.034 337.961L420.251 349.072Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M415.285 349.072L411.738 337.961L415.285 327.085L419.305 337.961L415.285 349.072Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M410.556 349.073L406.772 337.961L410.556 327.086L414.339 337.961L410.556 349.073Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M428.885 375.146V353.159H406.658V375.146H428.885Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M424.981 375.079L421.197 364.203L424.981 353.092L428.764 364.203L424.981 375.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M420.251 375.079L416.467 364.203L420.251 353.092L424.034 364.203L420.251 375.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M415.286 375.079L411.739 364.203L415.286 353.092L419.305 364.203L415.286 375.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M410.557 375.079L406.773 364.203L410.557 353.092L414.34 364.203L410.557 375.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path opacity="0.2" d="M429.236 385.008H406.299V391.155H429.236V385.008Z" fill="#086608"/>
            <path opacity="0.29" d="M409.136 330.868V314.792C409.136 314.319 409.609 313.846 410.082 313.846C410.555 313.846 411.028 314.319 411.028 314.792V330.868C411.028 331.341 410.555 331.814 410.082 331.814C409.609 331.814 409.136 331.341 409.136 330.868Z" fill="#54E287"/>
            <path opacity="0.4" d="M429.473 289.968H421.433V407.704H429.473V289.968Z" fill="#086608"/>
            <path opacity="0.2" d="M421.433 289.968H413.394V407.704H421.433V289.968Z" fill="#086608"/>
            <path d="M406.152 407.584V272.116H380.378V407.584H406.152Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M386.909 272V407.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M391.402 272V407.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M395.659 272V407.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M399.915 272V407.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.29" d="M385.018 304.626V288.549C385.018 288.076 385.491 287.604 385.963 287.604C386.436 287.604 386.909 288.076 386.909 288.549V304.626C386.909 305.099 386.436 305.571 385.963 305.571C385.491 305.571 385.018 305.099 385.018 304.626Z" fill="#54E287"/>
            <path opacity="0.4" d="M406.299 272H398.259V407.468H406.299V272Z" fill="#086608"/>
            <path opacity="0.2" d="M398.259 272H390.22V407.468H398.259V272Z" fill="#086608"/>
            <path d="M225.199 136.447L238.075 72.4811L222.081 69.2626L209.204 133.229L225.199 136.447Z" fill="#FA5738"/>
            <path d="M226.746 87.6385L226.037 80.7823L228.638 78.4182L230.056 81.4916L226.746 87.6385Z" fill="#DB4633"/>
            <path d="M226.982 87.6385L230.529 81.728L233.839 81.2552L233.13 84.5651L226.982 87.6385Z" fill="#DB4633"/>
            <path d="M226.508 87.6386L225.563 80.7824L222.725 78.8911L222.016 82.2009L226.508 87.6386Z" fill="#DB4633"/>
            <path d="M231.637 91.6734L220.51 89.4344L218.924 97.3143L230.051 99.5533L231.637 91.6734Z" fill="#DB4633"/>
            <path d="M225.357 122.595L214.23 120.357L213.437 124.296L224.564 126.535L225.357 122.595Z" fill="#DB4633"/>
            <path opacity="0.3" d="M219.888 92.6033L222.016 82.4373C222.016 82.2009 222.489 81.9645 222.726 81.9645C222.962 81.9645 223.199 82.4373 223.199 82.6737L221.07 92.8398C221.07 93.0762 220.598 93.3126 220.361 93.3126C220.125 93.3126 219.888 93.0762 219.888 92.6033Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M238.066 72.4978L232.966 71.4716L220.09 135.438L225.189 136.464L238.066 72.4978Z" fill="#AD1905"/>
            <path opacity="0.3" d="M232.899 71.2956L227.799 70.2694L214.922 134.236L220.022 135.262L232.899 71.2956Z" fill="#C12110"/>
            <path d="M261.744 136.864V27.5582L239.139 27.5582L239.139 136.864H261.744Z" fill="#FA5738"/>
            <path d="M261.695 116.075H239.091V124.014H261.695V116.075Z" fill="#DB4633"/>
            <path d="M261.695 44.8331H239.091V52.7715H261.695V44.8331Z" fill="#DB4633"/>
            <path opacity="0.3" d="M241.971 51.7538V37.9125C241.971 37.5054 242.414 37.0983 242.858 37.0983C243.301 37.0983 243.744 37.5054 243.744 37.9125V51.7538C243.744 52.1609 243.301 52.568 242.858 52.568C242.414 52.568 241.971 52.3645 241.971 51.7538Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M261.695 27.5314H254.16V136.838H261.695V27.5314Z" fill="#AD1905"/>
            <path opacity="0.3" d="M254.381 27.5314H246.847V136.838H254.381V27.5314Z" fill="#C12110"/>
            <path d="M307.423 136.918V35.55L285.927 35.55V136.918H307.423Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M307.05 63.8528V44.9227H286.219V63.8528H307.05Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M303.357 63.7632L299.812 54.3999L303.357 44.8331L306.903 54.3999L303.357 63.7632Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M298.925 63.7632L295.379 54.3999L298.925 44.8331L302.471 54.3999L298.925 63.7632Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M294.27 63.7632L290.946 54.3999L294.27 44.8331L298.037 54.3999L294.27 63.7632Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M289.839 63.7632L286.293 54.3999L289.839 44.8331L293.385 54.3999L289.839 63.7632Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M307.145 86.3291V67.399H286.314V86.3291H307.145Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M303.357 86.3572L299.812 76.7904L303.357 67.4271L306.903 76.7904L303.357 86.3572Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M298.926 86.3572L295.38 76.7904L298.926 67.4271L302.472 76.7904L298.926 86.3572Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M294.271 86.3572L290.947 76.7904L294.271 67.4271L298.038 76.7904L294.271 86.3572Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M289.839 86.3574L286.293 76.7905L289.839 67.4272L293.385 76.7905L289.839 86.3574Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M307.018 108.806V89.8756H286.187V108.806H307.018Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M303.358 108.748L299.812 99.3843L303.358 89.8175L306.904 99.3843L303.358 108.748Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M298.926 108.748L295.38 99.3843L298.926 89.8175L302.472 99.3843L298.926 108.748Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M294.271 108.748L290.947 99.3843L294.271 89.8175L298.039 99.3843L294.271 108.748Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M289.841 108.748L286.295 99.3843L289.841 89.8175L293.386 99.3843L289.841 108.748Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path opacity="0.2" d="M307.346 117.297H285.85V122.589H307.346V117.297Z" fill="#086608"/>
            <path opacity="0.29" d="M288.509 70.684V56.8426C288.509 56.4355 288.952 56.0284 289.395 56.0284C289.838 56.0284 290.282 56.4355 290.282 56.8426V70.684C290.282 71.0911 289.838 71.4982 289.395 71.4982C288.952 71.4982 288.509 71.0911 288.509 70.684Z" fill="#54E287"/>
            <path opacity="0.4" d="M307.568 35.4698H300.033V136.838H307.568V35.4698Z" fill="#086608"/>
            <path opacity="0.2" d="M300.034 35.4698H292.499V136.838H300.034V35.4698Z" fill="#086608"/>
            <path d="M285.713 136.734V20.1001L261.558 20.1001V136.734H285.713Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M267.678 20V136.838" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M271.889 20V136.838" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M275.878 20V136.838" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M279.866 20V136.838" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.29" d="M265.906 48.0898V34.2485C265.906 33.8414 266.349 33.4343 266.792 33.4343C267.235 33.4343 267.679 33.8414 267.679 34.2485V48.0898C267.679 48.4969 267.235 48.904 266.792 48.904C266.349 48.904 265.906 48.4969 265.906 48.0898Z" fill="#54E287"/>
            <path opacity="0.4" d="M285.851 20H278.316V136.634H285.851V20Z" fill="#086608"/>
            <path opacity="0.2" d="M278.315 20H270.781V136.634H278.315V20Z" fill="#086608"/>
            <path d="M461.512 135.537V35.0591L436.684 35.0591V135.537H461.512Z" fill="#2B9C58"/>
            <path d="M449.074 61.3438L446 51.1778L449.074 46.9222L452.148 51.1778L449.074 61.3438Z" fill="#247F5C"/>
            <path d="M449.546 61.3439L452.857 51.1779L457.823 49.5229V54.7242L449.546 61.3439Z" fill="#247F5C"/>
            <path d="M448.837 61.3439L445.527 51.1779L440.561 49.5229V54.7242L448.837 61.3439Z" fill="#247F5C"/>
            <path d="M458.059 65.8359H440.561V78.1297H458.059V65.8359Z" fill="#247F5C"/>
            <path d="M458.059 114.538H440.561V120.685H458.059V114.538Z" fill="#247F5C"/>
            <path opacity="0.29" d="M440.561 71.037V54.9606C440.561 54.4877 441.034 54.0149 441.507 54.0149C441.98 54.0149 442.453 54.4877 442.453 54.9606V71.037C442.453 71.5099 441.98 71.9827 441.507 71.9827C440.798 71.9827 440.561 71.5099 440.561 71.037Z" fill="#54E287"/>
            <path opacity="0.4" d="M461.606 35.1013H453.566V135.579H461.606V35.1013Z" fill="#086608"/>
            <path opacity="0.2" d="M453.803 35.1013H445.764V135.579H453.803V35.1013Z" fill="#086608"/>
            <path d="M414.154 135.83V18.0933L437.091 18.0933V135.83H414.154Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M414.551 50.9663V28.9794L436.779 28.9794V50.9663H414.551Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M418.493 50.8623L422.276 39.987L418.493 28.8753L414.71 39.987L418.493 50.8623Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M423.222 50.8623L427.006 39.987L423.222 28.8753L419.439 39.987L423.222 50.8623Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M428.188 50.8623L431.735 39.987L428.188 28.8753L424.168 39.987L428.188 50.8623Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M432.917 50.8623L436.701 39.987L432.917 28.8753L429.134 39.987L432.917 50.8623Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M414.452 77.0721V55.0852L436.679 55.0852V77.0721H414.452Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M418.493 77.1048L422.277 65.9931L418.493 55.1178L414.71 65.9931L418.493 77.1048Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M423.222 77.1048L427.006 65.9931L423.222 55.1178L419.439 65.9931L423.222 77.1048Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M428.188 77.1048L431.735 65.9931L428.188 55.1178L424.168 65.9931L428.188 77.1048Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M432.917 77.1049L436.701 65.9932L432.917 55.1179L429.134 65.9932L432.917 77.1049Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M414.588 103.178V81.1912H436.815V103.178H414.588Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M418.492 103.111L422.276 92.2355L418.492 81.1238L414.709 92.2355L418.492 103.111Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M423.222 103.111L427.006 92.2355L423.222 81.1238L419.439 92.2355L423.222 103.111Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M428.187 103.111L431.734 92.2355L428.187 81.1238L424.168 92.2355L428.187 103.111Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M432.916 103.111L436.7 92.2355L432.916 81.1238L429.133 92.2355L432.916 103.111Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path opacity="0.2" d="M414.237 113.04H437.173V119.187H414.237V113.04Z" fill="#086608"/>
            <path opacity="0.29" d="M434.336 58.9005V42.824C434.336 42.3511 433.864 41.8783 433.391 41.8783C432.918 41.8783 432.445 42.3511 432.445 42.824V58.9005C432.445 59.3733 432.918 59.8461 433.391 59.8461C433.864 59.8461 434.336 59.3733 434.336 58.9005Z" fill="#54E287"/>
            <path opacity="0.4" d="M414 18H422.04V135.737H414V18Z" fill="#086608"/>
            <path opacity="0.2" d="M422.04 18H430.08V135.737H422.04V18Z" fill="#086608"/>
            <path d="M596.269 135.736V8.77875L620.388 8.77875V135.736H596.269Z" fill="#FA5738"/>
            <path d="M596.321 111.59H620.44V120.81H596.321V111.59Z" fill="#DB4633"/>
            <path d="M596.321 28.8431H620.44V38.0635H596.321V28.8431Z" fill="#DB4633"/>
            <path opacity="0.3" d="M617.366 36.8815V20.805C617.366 20.3322 616.893 19.8593 616.42 19.8593C615.947 19.8593 615.474 20.3322 615.474 20.805V36.8815C615.474 37.3543 615.947 37.8272 616.42 37.8272C616.893 37.8272 617.366 37.5907 617.366 36.8815Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M596.321 8.74762H604.361V135.705H596.321V8.74762Z" fill="#AD1905"/>
            <path opacity="0.3" d="M604.124 8.74762H612.164V135.705H604.124V8.74762Z" fill="#C12110"/>
            <path d="M547.527 135.798V18.0612L570.464 18.0612V135.798H547.527Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M547.925 50.9341V28.9472L570.152 28.9472V50.9341H547.925Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M551.866 50.8301L555.649 39.9548L551.866 28.8431L548.083 39.9548L551.866 50.8301Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M556.596 50.8301L560.379 39.9548L556.596 28.8431L552.812 39.9548L556.596 50.8301Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M561.561 50.8301L565.108 39.9548L561.561 28.8431L557.541 39.9548L561.561 50.8301Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M566.29 50.8301L570.074 39.9548L566.29 28.8431L562.507 39.9548L566.29 50.8301Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M547.825 77.04V55.053L570.052 55.053V77.04H547.825Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M551.867 77.0726L555.65 65.9609L551.867 55.0856L548.083 65.9609L551.867 77.0726Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M556.596 77.0726L560.379 65.9609L556.596 55.0856L552.812 65.9609L556.596 77.0726Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M561.561 77.0726L565.108 65.9609L561.561 55.0856L557.541 65.9609L561.561 77.0726Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M566.29 77.0728L570.074 65.9611L566.29 55.0858L562.507 65.9611L566.29 77.0728Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M547.961 103.146V81.1591H570.188V103.146H547.961Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M551.866 103.079L555.649 92.2034L551.866 81.0917L548.082 92.2034L551.866 103.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M556.596 103.079L560.379 92.2034L556.596 81.0917L552.812 92.2034L556.596 103.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M561.56 103.079L565.107 92.2034L561.56 81.0917L557.541 92.2034L561.56 103.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M566.289 103.079L570.073 92.2034L566.289 81.0917L562.506 92.2034L566.289 103.079Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path opacity="0.2" d="M547.61 113.008H570.546V119.155H547.61V113.008Z" fill="#086608"/>
            <path opacity="0.29" d="M567.709 58.8683V42.7918C567.709 42.319 567.237 41.8461 566.764 41.8461C566.291 41.8461 565.818 42.319 565.818 42.7918V58.8683C565.818 59.3411 566.291 59.814 566.764 59.814C567.237 59.814 567.709 59.3411 567.709 58.8683Z" fill="#54E287"/>
            <path opacity="0.4" d="M547.373 17.9678H555.413V135.704H547.373V17.9678Z" fill="#086608"/>
            <path opacity="0.2" d="M555.413 17.9678H563.453V135.704H555.413V17.9678Z" fill="#086608"/>
            <path d="M570.694 135.584V0.116394L596.468 0.116394V135.584H570.694Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M589.937 0V135.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M585.444 0V135.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M581.187 0V135.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.4" d="M576.931 0V135.704" stroke="#0B6B0B" strokeMiterlimit="10"/>
            <path opacity="0.29" d="M591.828 32.6258V16.5493C591.828 16.0765 591.355 15.6036 590.882 15.6036C590.409 15.6036 589.936 16.0765 589.936 16.5493V32.6258C589.936 33.0986 590.409 33.5715 590.882 33.5715C591.355 33.5715 591.828 33.0986 591.828 32.6258Z" fill="#54E287"/>
            <path opacity="0.4" d="M570.547 0H578.587V135.468H570.547V0Z" fill="#086608"/>
            <path opacity="0.2" d="M578.587 0H586.626V135.468H578.587V0Z" fill="#086608"/>
            <path d="M451.268 407.471V319.272H429.473V407.471H451.268Z" fill="#FA5738"/>
            <path d="M440.31 342.413L437.612 333.49L440.31 329.754L442.801 333.49L440.31 342.413Z" fill="#DB4633"/>
            <path d="M440.518 342.413L443.631 333.489L447.782 332.037V336.602L440.518 342.413Z" fill="#DB4633"/>
            <path d="M439.895 342.413L436.989 333.489L432.63 332.037V336.602L439.895 342.413Z" fill="#DB4633"/>
            <path d="M447.99 346.356H432.63V357.148H447.99V346.356Z" fill="#DB4633"/>
            <path d="M447.99 389.107H432.63V394.502H447.99V389.107Z" fill="#DB4633"/>
            <path opacity="0.3" d="M432.63 350.922V336.81C432.63 336.395 433.046 335.98 433.461 335.98C433.876 335.98 434.291 336.395 434.291 336.81V350.922C434.291 351.337 433.876 351.752 433.461 351.752C433.046 351.752 432.63 351.337 432.63 350.922Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M451.311 319.378H444.254V407.577H451.311V319.378Z" fill="#AD1905"/>
            <path opacity="0.3" d="M444.253 319.378H437.196V407.577H444.253V319.378Z" fill="#C12110"/>
            <path d="M525.579 135.471V47.2725L547.373 47.2725V135.471H525.579Z" fill="#FA5738"/>
            <path d="M536.536 70.4133L539.234 61.4897L536.536 57.7542L534.045 61.4897L536.536 70.4133Z" fill="#DB4633"/>
            <path d="M536.329 70.4133L533.215 61.4896L529.064 60.0369V64.6025L536.329 70.4133Z" fill="#DB4633"/>
            <path d="M536.951 70.4133L539.857 61.4896L544.216 60.0369V64.6025L536.951 70.4133Z" fill="#DB4633"/>
            <path d="M528.856 74.3563H544.216V85.1477H528.856V74.3563Z" fill="#DB4633"/>
            <path d="M528.856 117.107H544.216V122.503H528.856V117.107Z" fill="#DB4633"/>
            <path opacity="0.3" d="M544.216 78.9219V64.8101C544.216 64.395 543.801 63.98 543.386 63.98C542.97 63.98 542.555 64.395 542.555 64.8101V78.9219C542.555 79.337 542.97 79.752 543.386 79.752C543.801 79.752 544.216 79.337 544.216 78.9219Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M525.535 47.3778H532.592V135.577H525.535V47.3778Z" fill="#AD1905"/>
            <path opacity="0.3" d="M532.593 47.3778H539.65V135.577H532.593V47.3778Z" fill="#C12110"/>
            <path d="M327.992 135.486V59.5494H307.567V135.486H327.992Z" fill="#FA5738"/>
            <path d="M317.724 79.473L315.195 71.79L317.724 68.5739L320.058 71.79L317.724 79.473Z" fill="#DB4633"/>
            <path d="M317.918 79.473L320.836 71.79L324.726 70.5392V74.4701L317.918 79.473Z" fill="#DB4633"/>
            <path d="M317.335 79.473L314.612 71.79L310.527 70.5392V74.4701L317.335 79.473Z" fill="#DB4633"/>
            <path d="M324.922 82.8678H310.527V92.1589H324.922V82.8678Z" fill="#DB4633"/>
            <path d="M324.922 119.675H310.527V124.32H324.922V119.675Z" fill="#DB4633"/>
            <path opacity="0.3" d="M310.527 86.7987V74.6488C310.527 74.2915 310.916 73.9341 311.305 73.9341C311.694 73.9341 312.083 74.2915 312.083 74.6488V86.7987C312.083 87.156 311.694 87.5134 311.305 87.5134C310.916 87.5134 310.527 87.156 310.527 86.7987Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M328.034 59.6401H321.42V135.577H328.034V59.6401Z" fill="#AD1905"/>
            <path opacity="0.3" d="M321.419 59.6401H314.805V135.577H321.419V59.6401Z" fill="#C12110"/>
            <path d="M391.599 135.471V47.2725L413.393 47.2725V135.471H391.599Z" fill="#FA5738"/>
            <path d="M402.556 70.4133L405.254 61.4897L402.556 57.7542L400.065 61.4897L402.556 70.4133Z" fill="#DB4633"/>
            <path d="M402.348 70.4133L399.235 61.4896L395.083 60.0369V64.6025L402.348 70.4133Z" fill="#DB4633"/>
            <path d="M402.971 70.4133L405.876 61.4896L410.235 60.0369V64.6025L402.971 70.4133Z" fill="#DB4633"/>
            <path d="M394.876 74.3563H410.235V85.1477H394.876V74.3563Z" fill="#DB4633"/>
            <path d="M394.876 117.107H410.235V122.503H394.876V117.107Z" fill="#DB4633"/>
            <path opacity="0.3" d="M410.235 78.9219V64.8101C410.235 64.395 409.82 63.98 409.405 63.98C408.99 63.98 408.575 64.395 408.575 64.8101V78.9219C408.575 79.337 408.99 79.752 409.405 79.752C409.82 79.752 410.235 79.337 410.235 78.9219Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M391.555 47.3778H398.612V135.577H391.555V47.3778Z" fill="#AD1905"/>
            <path opacity="0.3" d="M398.613 47.3778H405.67V135.577H398.613V47.3778Z" fill="#C12110"/>
            <path d="M472.33 407.507V296.065H451.158V407.507H472.33Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M472.275 386.409H451.104V394.502H472.275V386.409Z" fill="#086608"/>
            <path opacity="0.4" d="M472.275 313.775H451.104V321.868H472.275V313.775Z" fill="#086608"/>
            <path opacity="0.29" d="M453.801 320.831V306.926C453.801 306.511 454.216 306.096 454.632 306.096C455.047 306.096 455.462 306.511 455.462 306.926V321.038C455.462 321.453 455.047 321.868 454.632 321.868C454.216 321.661 453.801 321.246 453.801 320.831Z" fill="#54E287"/>
            <path opacity="0.4" d="M472.483 295.927H465.426V407.369H472.483V295.927Z" fill="#086608"/>
            <path opacity="0.2" d="M465.425 295.927H458.368V407.369H465.425V295.927Z" fill="#086608"/>
            <path d="M504.517 135.507V24.0649L525.688 24.0649V135.507H504.517Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M504.571 114.409H525.743V122.502H504.571V114.409Z" fill="#086608"/>
            <path opacity="0.4" d="M504.571 41.7746H525.743V49.8681H504.571V41.7746Z" fill="#086608"/>
            <path opacity="0.29" d="M523.045 48.8305V34.9262C523.045 34.5111 522.63 34.0961 522.215 34.0961C521.8 34.0961 521.384 34.5111 521.384 34.9262V49.038C521.384 49.453 521.8 49.8681 522.215 49.8681C522.63 49.6606 523.045 49.2455 523.045 48.8305Z" fill="#54E287"/>
            <path opacity="0.4" d="M504.363 23.9272H511.42V135.369H504.363V23.9272Z" fill="#086608"/>
            <path opacity="0.2" d="M511.421 23.9272H518.479V135.369H511.421V23.9272Z" fill="#086608"/>
            <path d="M347.732 135.517V39.5685L327.891 39.5685V135.517H347.732Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M347.681 117.352H327.839V124.32H347.681V117.352Z" fill="#086608"/>
            <path opacity="0.4" d="M347.681 54.816H327.839V61.7843H347.681V54.816Z" fill="#086608"/>
            <path opacity="0.29" d="M330.368 60.8908V48.9197C330.368 48.5623 330.757 48.205 331.146 48.205C331.535 48.205 331.924 48.5623 331.924 48.9197V61.0695C331.924 61.4268 331.535 61.7842 331.146 61.7842C330.757 61.6055 330.368 61.2482 330.368 60.8908Z" fill="#54E287"/>
            <path opacity="0.4" d="M347.876 39.45H341.262V135.398H347.876V39.45Z" fill="#086608"/>
            <path opacity="0.2" d="M341.261 39.45H334.647V135.398H341.261V39.45Z" fill="#086608"/>
            <path d="M370.537 135.507V24.0649L391.709 24.0649V135.507H370.537Z" fill="#2B9C58"/>
            <path opacity="0.4" d="M370.592 114.409H391.763V122.502H370.592V114.409Z" fill="#086608"/>
            <path opacity="0.4" d="M370.592 41.7746H391.763V49.8681H370.592V41.7746Z" fill="#086608"/>
            <path opacity="0.29" d="M389.065 48.8305V34.9262C389.065 34.5111 388.65 34.0961 388.235 34.0961C387.82 34.0961 387.405 34.5111 387.405 34.9262V49.038C387.405 49.453 387.82 49.8681 388.235 49.8681C388.65 49.6606 389.065 49.2455 389.065 48.8305Z" fill="#54E287"/>
            <path opacity="0.4" d="M370.383 23.9272H377.44V135.369H370.383V23.9272Z" fill="#086608"/>
            <path opacity="0.2" d="M377.442 23.9272H384.499V135.369H377.442V23.9272Z" fill="#086608"/>
            <path d="M515.114 407.561V304.213H494.981V407.561H515.114Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M514.765 333.068V313.768H495.254V333.068H514.765Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M511.298 333.074L508.184 323.528L511.298 313.774L514.619 323.528L511.298 333.074Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M507.145 333.074L503.824 323.528L507.145 313.774L510.466 323.528L507.145 333.074Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M502.995 333.074L499.674 323.528L502.995 313.774L506.316 323.528L502.995 333.074Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M498.636 333.074L495.315 323.528L498.636 313.774L501.957 323.528L498.636 333.074Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M514.854 355.984V336.684H495.342V355.984H514.854Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M511.298 355.902L508.184 346.356L511.298 336.602L514.619 346.356L511.298 355.902Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M507.146 355.902L503.825 346.356L507.146 336.602L510.467 346.356L507.146 355.902Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M502.993 355.902L499.672 346.356L502.993 336.602L506.314 346.356L502.993 355.902Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M498.635 355.902L495.314 346.356L498.635 336.602L501.956 346.356L498.635 355.902Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M514.941 378.9V359.6H495.43V378.9H514.941Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M511.298 378.938L508.184 369.184L511.298 359.638L514.619 369.184L511.298 378.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M507.146 378.938L503.825 369.184L507.146 359.638L510.467 369.184L507.146 378.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M502.993 378.938L499.672 369.184L502.993 359.638L506.314 369.184L502.993 378.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M498.635 378.938L495.314 369.184L498.635 359.638L501.956 369.184L498.635 378.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
                <path opacity="0.2" d="M515.033 387.654H494.899V393.05H515.033V387.654Z" fill="#086608"/>
                <path opacity="0.29" d="M497.391 340.13V326.019C497.391 325.604 497.806 325.188 498.221 325.188C498.636 325.188 499.051 325.604 499.051 326.019V340.13C499.051 340.545 498.636 340.96 498.221 340.96C497.806 340.96 497.391 340.545 497.391 340.13Z" fill="#54E287"/>
                <path opacity="0.4" d="M515.24 304.228H508.183V407.577H515.24V304.228Z" fill="#086608"/>
                <path opacity="0.2" d="M508.183 304.228H501.125V407.577H508.183V304.228Z" fill="#086608"/>
                <path d="M461.732 135.561V32.2129L481.866 32.2129V135.561H461.732Z" fill="#2B9C58"/>
            <g opacity="0.7">
                <path d="M462.082 61.0682V41.7682L481.593 41.7682V61.0682H462.082Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M465.549 61.0745L468.663 51.5283L465.549 41.7745L462.228 51.5283L465.549 61.0745Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M469.701 61.0745L473.022 51.5283L469.701 41.7745L466.38 51.5283L469.701 61.0745Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M473.852 61.0745L477.173 51.5283L473.852 41.7745L470.531 51.5283L473.852 61.0745Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M478.211 61.0746L481.532 51.5283L478.211 41.7746L474.89 51.5283L478.211 61.0746Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M461.993 83.9839V64.684H481.504V83.9839H461.993Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M465.549 83.9024L468.663 74.3562L465.549 64.6024L462.228 74.3562L465.549 83.9024Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M469.7 83.9024L473.021 74.3562L469.7 64.6024L466.379 74.3562L469.7 83.9024Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M473.853 83.9024L477.174 74.3562L473.853 64.6024L470.532 74.3562L473.853 83.9024Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M478.212 83.9024L481.533 74.3562L478.212 64.6024L474.891 74.3562L478.212 83.9024Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <g opacity="0.7">
                <path d="M461.906 106.9V87.5996H481.417V106.9H461.906Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10"/>
                <path d="M465.549 106.938L468.663 97.1841L465.549 87.6379L462.228 97.1841L465.549 106.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M469.7 106.938L473.021 97.1841L469.7 87.6379L466.379 97.1841L469.7 106.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M473.853 106.938L477.174 97.1841L473.853 87.6379L470.532 97.1841L473.853 106.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M478.212 106.938L481.533 97.1843L478.212 87.6381L474.891 97.1843L478.212 106.938Z" stroke="#F9F8F7" strokeWidth="0.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path opacity="0.2" d="M461.814 115.654H481.948V121.05H461.814V115.654Z" fill="#086608"/>
            <path opacity="0.29" d="M479.456 68.1304V54.0186C479.456 53.6035 479.041 53.1885 478.626 53.1885C478.211 53.1885 477.796 53.6035 477.796 54.0186V68.1304C477.796 68.5454 478.211 68.9605 478.626 68.9605C479.041 68.9605 479.456 68.5454 479.456 68.1304Z" fill="#54E287"/>
            <path opacity="0.4" d="M461.607 32.2283H468.664V135.577H461.607V32.2283Z" fill="#086608"/>
            <path opacity="0.2" d="M468.664 32.2283H475.721V135.577H468.664V32.2283Z" fill="#086608"/>
            <path d="M494.988 407.374V288.461H472.364V407.374H494.988Z" fill="#FA5738"/>
            <path d="M477.879 288.456V407.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M481.824 288.456V407.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M485.559 288.456V407.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M489.296 288.456V407.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path opacity="0.3" d="M476.219 317.095V302.983C476.219 302.568 476.634 302.153 477.05 302.153C477.465 302.153 477.88 302.568 477.88 302.983V317.095C477.88 317.51 477.465 317.925 477.05 317.925C476.634 317.925 476.219 317.51 476.219 317.095Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M494.899 288.456H487.842V407.369H494.899V288.456Z" fill="#AD1905"/>
            <path opacity="0.3" d="M488.049 288.456H480.992V407.369H488.049V288.456Z" fill="#C12110"/>
            <path d="M481.857 135.374V16.461L504.481 16.461V135.374H481.857Z" fill="#FA5738"/>
            <path d="M498.966 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M495.021 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M491.287 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M487.549 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path opacity="0.3" d="M500.626 45.095V30.9832C500.626 30.5681 500.211 30.1531 499.796 30.1531C499.381 30.1531 498.965 30.5681 498.965 30.9832V45.095C498.965 45.51 499.381 45.9251 499.796 45.9251C500.211 45.9251 500.626 45.51 500.626 45.095Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M481.946 16.4563H489.003V135.369H481.946V16.4563Z" fill="#AD1905"/>
            <path opacity="0.3" d="M488.796 16.4563H495.854V135.369H488.796V16.4563Z" fill="#C12110"/>
            <path d="M347.877 135.374V16.461L370.502 16.461V135.374H347.877Z" fill="#FA5738"/>
            <path d="M364.986 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M361.042 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M357.307 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path d="M353.57 16.4563V135.369" stroke="#DB4633" strokeMiterlimit="10"/>
            <path opacity="0.3" d="M366.646 45.095V30.9832C366.646 30.5681 366.231 30.1531 365.816 30.1531C365.401 30.1531 364.986 30.5681 364.986 30.9832V45.095C364.986 45.51 365.401 45.9251 365.816 45.9251C366.231 45.9251 366.646 45.51 366.646 45.095Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M347.967 16.4563H355.024V135.369H347.967V16.4563Z" fill="#AD1905"/>
            <path opacity="0.3" d="M354.817 16.4563H361.874V135.369H354.817V16.4563Z" fill="#C12110"/>
            <path d="M661.803 443.654H4.42318C2.03227 443.654 0 441.622 0 439.231V410.54C0 408.149 2.03227 406.117 4.42318 406.117H661.803C664.194 406.117 666.226 408.149 666.226 410.54V439.231C666.226 441.622 664.194 443.654 661.803 443.654Z" fill="#9E4525"/>
            <path d="M49.2529 508.328V429.309C49.2529 426.918 51.2852 424.886 53.6761 424.886H82.367C84.7579 424.886 86.7902 426.918 86.7902 429.309V508.328C86.7902 518.729 78.422 527.097 68.0216 527.097C57.6211 527.097 49.2529 518.729 49.2529 508.328Z" fill="#9E4525"/>
            <path d="M579.437 508.328V429.309C579.437 426.918 581.469 424.886 583.86 424.886H612.551C614.942 424.886 616.974 426.918 616.974 429.309V508.328C616.974 518.729 608.606 527.097 598.205 527.097C587.805 527.097 579.437 518.729 579.437 508.328Z" fill="#9E4525"/>
            <path d="M661.803 443.654H4.42318C2.03227 443.654 0 441.622 0 439.231V432.895H666.226V439.231C666.226 441.622 664.194 443.654 661.803 443.654Z" fill="#82331C"/>
            <path opacity="0.19" d="M661.803 454.414H4.42318C2.03227 454.414 0 452.381 0 449.99V443.654H666.226V449.99C666.226 452.381 664.194 454.414 661.803 454.414Z" fill="#543129"/>
            <path d="M68.0215 472.943C71.1245 472.943 73.6401 470.427 73.6401 467.324C73.6401 464.221 71.1245 461.706 68.0215 461.706C64.9184 461.706 62.4028 464.221 62.4028 467.324C62.4028 470.427 64.9184 472.943 68.0215 472.943Z" fill="#D1975D"/>
            <path d="M68.0215 502.112C71.1245 502.112 73.6401 499.596 73.6401 496.493C73.6401 493.39 71.1245 490.875 68.0215 490.875C64.9184 490.875 62.4028 493.39 62.4028 496.493C62.4028 499.596 64.9184 502.112 68.0215 502.112Z" fill="#D1975D"/>
            <path d="M598.205 472.943C601.308 472.943 603.824 470.427 603.824 467.324C603.824 464.221 601.308 461.706 598.205 461.706C595.102 461.706 592.586 464.221 592.586 467.324C592.586 470.427 595.102 472.943 598.205 472.943Z" fill="#D1975D"/>
            <path d="M598.205 502.112C601.308 502.112 603.824 499.596 603.824 496.493C603.824 493.39 601.308 490.875 598.205 490.875C595.102 490.875 592.586 493.39 592.586 496.493C592.586 499.596 595.102 502.112 598.205 502.112Z" fill="#D1975D"/>
            <path d="M118.708 318.012H48.5352V406.117H118.708V318.012Z" fill="#622B16"/>
            <path d="M105.199 334.988H62.1631V389.022H105.199V334.988Z" fill="#FDF3F1"/>
            <path d="M570.59 362.244C571.905 368.699 568.797 374.796 563.656 375.992C558.516 377.068 553.136 372.764 551.821 366.309C550.506 359.853 547.039 322.674 552.18 321.479C557.44 320.284 569.275 355.789 570.59 362.244Z" fill="#1E883B"/>
            <path d="M579.675 366.069C578.48 372.525 573.22 377.068 568.079 376.111C562.819 375.155 559.592 369.058 560.787 362.603C561.983 356.147 572.981 320.403 578.241 321.36C583.501 322.316 580.871 359.495 579.675 366.069Z" fill="#1E883B"/>
            <path d="M563.895 357.223C566.525 362.603 564.732 368.819 559.95 371.21C555.168 373.481 549.191 370.971 546.561 365.591C543.931 360.212 533.172 327.934 537.954 325.663C542.736 323.272 561.265 351.724 563.895 357.223Z" fill="#2B9C58"/>
            <path d="M566.286 357.223C563.656 362.603 565.449 368.819 570.231 371.21C575.013 373.481 580.99 370.971 583.62 365.591C586.25 360.212 597.009 327.934 592.227 325.663C587.445 323.392 568.916 351.724 566.286 357.223Z" fill="#2B9C58"/>
            <path d="M574.654 357.223C574.654 363.798 570.35 369.178 564.971 369.178C559.711 369.178 555.407 363.798 555.407 357.223C555.407 350.648 559.83 313.47 565.09 313.47C570.35 313.47 574.654 350.648 574.654 357.223Z" fill="#2B9C58"/>
            <path d="M581.468 406.117H548.115L539.986 364.515H590.075L581.468 406.117Z" fill="#FE8A58"/>
            <path d="M592.825 357.104H537.356V369.178H592.825V357.104Z" fill="#622B16"/>
            <path d="M588.282 373.362H541.779L542.257 375.753H587.685L588.282 373.362Z" fill="#FFFCF8"/>
            <path d="M587.446 376.948H542.497L542.975 379.339H586.967L587.446 376.948Z" fill="#FFFCF8"/>
            <path d="M661.803 172.85H4.42318C2.03227 172.85 0 170.818 0 168.427V139.736C0 137.345 2.03227 135.313 4.42318 135.313H661.803C664.194 135.313 666.226 137.345 666.226 139.736V168.427C666.226 170.818 664.194 172.85 661.803 172.85Z" fill="#9E4525"/>
            <path d="M49.2529 237.524V158.504C49.2529 156.113 51.2852 154.081 53.6761 154.081H82.367C84.7579 154.081 86.7902 156.113 86.7902 158.504V237.524C86.7902 247.924 78.422 256.292 68.0216 256.292C57.6211 256.292 49.2529 247.924 49.2529 237.524Z" fill="#9E4525"/>
            <path d="M579.437 237.524V158.504C579.437 156.113 581.469 154.081 583.86 154.081H612.551C614.942 154.081 616.974 156.113 616.974 158.504V237.524C616.974 247.924 608.606 256.292 598.205 256.292C587.805 256.292 579.437 247.924 579.437 237.524Z" fill="#9E4525"/>
            <path d="M661.803 172.85H4.42318C2.03227 172.85 0 170.818 0 168.427V162.091H666.226V168.427C666.226 170.818 664.194 172.85 661.803 172.85Z" fill="#82331C"/>
            <path opacity="0.19" d="M661.803 183.609H4.42318C2.03227 183.609 0 181.577 0 179.186V172.85H666.226V179.186C666.226 181.577 664.194 183.609 661.803 183.609Z" fill="#543129"/>
            <path d="M68.0215 202.138C71.1245 202.138 73.6401 199.623 73.6401 196.52C73.6401 193.417 71.1245 190.901 68.0215 190.901C64.9184 190.901 62.4028 193.417 62.4028 196.52C62.4028 199.623 64.9184 202.138 68.0215 202.138Z" fill="#D1975D"/>
            <path d="M68.0215 231.308C71.1245 231.308 73.6401 228.792 73.6401 225.689C73.6401 222.586 71.1245 220.07 68.0215 220.07C64.9184 220.07 62.4028 222.586 62.4028 225.689C62.4028 228.792 64.9184 231.308 68.0215 231.308Z" fill="#D1975D"/>
            <path d="M598.205 202.138C601.308 202.138 603.824 199.623 603.824 196.52C603.824 193.417 601.308 190.901 598.205 190.901C595.102 190.901 592.586 193.417 592.586 196.52C592.586 199.623 595.102 202.138 598.205 202.138Z" fill="#D1975D"/>
            <path d="M598.205 231.308C601.308 231.308 603.824 228.792 603.824 225.689C603.824 222.586 601.308 220.07 598.205 220.07C595.102 220.07 592.586 222.586 592.586 225.689C592.586 228.792 595.102 231.308 598.205 231.308Z" fill="#D1975D"/>
            <path d="M318.994 407.185L331.871 343.219L315.876 340L303 403.966L318.994 407.185Z" fill="#FA5738"/>
            <path d="M320.541 358.376L319.832 351.52L322.433 349.155L323.852 352.229L320.541 358.376Z" fill="#DB4633"/>
            <path d="M320.778 358.376L324.325 352.465L327.635 351.992L326.926 355.302L320.778 358.376Z" fill="#DB4633"/>
            <path d="M320.304 358.376L319.358 351.52L316.521 349.628L315.812 352.938L320.304 358.376Z" fill="#DB4633"/>
            <path d="M325.433 362.411L314.306 360.172L312.72 368.052L323.847 370.291L325.433 362.411Z" fill="#DB4633"/>
            <path d="M319.153 393.333L308.026 391.094L307.233 395.034L318.36 397.273L319.153 393.333Z" fill="#DB4633"/>
            <path opacity="0.3" d="M313.684 363.341L315.812 353.175C315.812 352.938 316.285 352.702 316.521 352.702C316.758 352.702 316.994 353.175 316.994 353.411L314.866 363.577C314.866 363.814 314.393 364.05 314.157 364.05C313.92 364.05 313.684 363.814 313.684 363.341Z" fill="#FFCCC5"/>
            <path opacity="0.4" d="M331.862 343.235L326.762 342.209L313.886 406.175L318.985 407.201L331.862 343.235Z" fill="#AD1905"/>
            <path opacity="0.3" d="M326.694 342.033L321.594 341.007L308.718 404.973L313.817 405.999L326.694 342.033Z" fill="#C12110"/>
            <g clipPath="url(#clip0_107_1726)">
                <path d="M99.0281 37.1694C99.0281 37.1694 99.3863 80.0673 81.1157 90.7918" stroke="#44935F" strokeMiterlimit="10"/>
                <path d="M56.3965 31.4496C56.3965 31.4496 56.0383 74.3476 74.3088 85.0721" stroke="#44935F" strokeMiterlimit="10"/>
                <path d="M50.6644 28.5898C49.7688 27.3386 50.3062 25.7299 51.7392 25.1937C53.1721 24.3 54.9634 24.6575 55.6799 25.9087C56.5755 27.1599 56.9337 29.6622 55.5007 30.3772C54.0678 31.2709 51.3809 29.6623 50.6644 28.5898Z" fill="#FE6F59"/>
                <path d="M51.7392 33.952C50.1271 34.1308 48.6941 33.0583 48.515 31.6284C48.3359 30.1984 49.4106 28.9473 51.2018 28.7685C52.814 28.5898 55.6799 29.3047 55.8591 30.7347C56.0382 32.1646 53.3513 33.7733 51.7392 33.952Z" fill="#FE6F59"/>
                <path d="M56.7549 36.6331C56.0384 37.8843 54.2472 38.4206 52.8142 37.8843C51.3812 37.1694 50.6647 35.5607 51.3812 34.3095C52.0977 33.0583 54.4263 31.2709 55.8593 31.9859C57.2923 32.7008 57.4714 35.3819 56.7549 36.6331Z" fill="#FE6F59"/>
                <path d="M62.4867 33.4158C63.5614 34.4882 63.3823 36.0969 62.1284 36.9906C60.8746 37.8843 58.9042 37.7056 58.0086 36.6331C57.113 35.5607 56.0382 33.0583 57.4712 32.1646C58.546 31.2709 61.5911 32.3433 62.4867 33.4158Z" fill="#FE6F59"/>
                <path d="M54.6053 26.4449C54.7844 25.015 56.3965 24.1213 58.0086 24.3C59.6207 24.4787 60.6955 25.7299 60.5163 27.1599C60.3372 28.5898 58.7251 30.7347 57.113 30.556C55.3218 30.3772 54.247 27.8748 54.6053 26.4449Z" fill="#FE6F59"/>
                <path d="M59.4414 27.3386C60.8743 26.6236 62.6656 27.1599 63.3821 28.4111C64.0986 29.6622 63.5612 31.2709 62.1282 31.8071C60.6952 32.3434 57.6501 32.7008 56.9336 31.4497C56.2171 30.1985 58.0084 28.0536 59.4414 27.3386Z" fill="#FE6F59"/>
                <path d="M93.8334 34.8457C93.1169 33.7733 93.4752 32.5221 94.7291 31.8071C95.9829 31.0921 97.595 31.6284 98.3115 32.7008C99.028 33.7733 99.3863 35.9182 98.1324 36.6331C96.8785 37.1694 94.5499 35.9182 93.8334 34.8457Z" fill="#FE6F59"/>
                <path d="M94.7288 39.493C93.2958 39.6718 92.0419 38.7781 91.8628 37.5269C91.6837 36.2757 92.7584 35.2032 94.1914 35.0245C95.6244 34.8458 98.1321 35.5607 98.3112 36.8119C98.4904 38.0631 96.1618 39.3143 94.7288 39.493Z" fill="#FE6F59"/>
                <path d="M99.207 41.1017C98.6696 42.1741 97.0575 42.7104 95.8036 42.1741C94.5498 41.6379 94.0124 40.3867 94.5498 39.3143C95.0871 38.2418 97.0575 36.6332 98.4905 37.1694C99.7444 37.7056 99.7444 40.0292 99.207 41.1017Z" fill="#FE6F59"/>
                <path d="M104.043 38.5993C104.939 39.493 104.76 40.9229 103.685 41.6379C102.61 42.3529 100.998 42.1741 100.103 41.2804C99.2072 40.3867 98.4907 38.2418 99.5654 37.3481C100.64 36.8119 103.148 37.7056 104.043 38.5993Z" fill="#FE6F59"/>
                <path d="M97.2366 33.0583C97.4157 31.8071 98.6696 31.0922 100.103 31.2709C101.536 31.4496 102.61 32.5221 102.431 33.7733C102.252 35.0245 100.819 36.8119 99.3861 36.6331C97.9531 36.4544 97.0575 34.3095 97.2366 33.0583Z" fill="#FE6F59"/>
                <path d="M101.536 33.7733C102.79 33.2371 104.402 33.5945 104.939 34.667C105.476 35.7394 105.118 36.9906 103.864 37.7056C102.61 38.4206 99.9236 38.4206 99.3862 37.3481C98.6697 36.2757 100.282 34.3095 101.536 33.7733Z" fill="#FE6F59"/>
                <path d="M93.1169 82.7485C95.0873 89.0044 90.4301 94.9029 82.7278 95.9754C75.0255 97.0478 66.9649 92.758 64.9945 86.6808C63.0242 80.6036 57.8296 44.6766 65.5319 43.7829C73.2342 42.5317 90.9674 76.4925 93.1169 82.7485Z" fill="#478A5F"/>
                <path d="M78.0704 72.9177C84.5188 74.5263 87.0266 81.4973 83.8024 88.6469C80.5781 95.7966 72.8758 100.265 66.4274 98.8352C59.979 97.2265 27.0203 82.7484 30.0654 75.5988C33.1105 68.4491 71.622 71.309 78.0704 72.9177Z" fill="#478A5F"/>
                <path d="M91.8629 72.9177C85.4145 74.3476 82.9068 81.4973 86.131 88.6469C89.3552 95.7966 97.0575 100.265 103.506 98.8352C109.954 97.2265 142.913 82.7484 139.868 75.5988C136.465 68.4491 98.1322 71.309 91.8629 72.9177Z" fill="#478A5F"/>
                <path d="M106.551 86.502C104.76 92.758 96.8782 97.0478 89.1759 96.1541C81.2945 95.2603 76.4582 89.3619 78.2494 83.1059C80.0406 76.85 96.52 42.5316 104.401 43.6041C112.283 44.6765 108.342 80.2461 106.551 86.502Z" fill="#478A5F"/>
                <path d="M82.9066 77.9224C86.8473 83.1059 84.1605 89.1832 76.9955 91.3281C69.8306 93.4729 60.8744 91.1493 56.9337 85.9658C52.993 80.7823 36.8719 49.86 44.0368 47.7151C51.2018 45.5702 78.9659 72.7389 82.9066 77.9224Z" fill="#66B784"/>
                <path d="M86.4893 77.9224C82.5485 83.1059 85.2354 89.1832 92.4003 91.3281C99.5653 93.4729 108.521 91.1493 112.462 85.9658C116.403 80.7823 132.524 49.86 125.359 47.7151C118.194 45.5702 90.43 72.7389 86.4893 77.9224Z" fill="#66B784"/>
                <path d="M99.0278 77.9225C99.0278 84.1784 92.5794 89.3619 84.5188 89.3619C76.4583 89.3619 70.189 84.1784 70.189 77.9225C70.189 71.6665 76.8165 35.9182 84.698 35.9182C92.7585 35.9182 99.2069 71.6665 99.0278 77.9225Z" fill="#66B784"/>
                <path d="M56.3965 33.4158C57.6825 33.4158 58.7251 32.5356 58.7251 31.4497C58.7251 30.3638 57.6825 29.4835 56.3965 29.4835C55.1104 29.4835 54.0679 30.3638 54.0679 31.4497C54.0679 32.5356 55.1104 33.4158 56.3965 33.4158Z" fill="#D6CD27"/>
                <path d="M99.0276 38.5993C99.918 38.5993 100.64 37.9591 100.64 37.1694C100.64 36.3796 99.918 35.7394 99.0276 35.7394C98.1373 35.7394 97.4155 36.3796 97.4155 37.1694C97.4155 37.9591 98.1373 38.5993 99.0276 38.5993Z" fill="#D6CD27"/>
                <path d="M100.103 135.477H69.2936C48.5153 135.477 31.4985 118.497 31.4985 97.7627V88.2894C31.4985 86.8595 32.7524 85.6083 34.1854 85.6083H135.211C136.644 85.6083 137.898 86.8595 137.898 88.2894V97.7627C137.898 118.497 120.881 135.477 100.103 135.477Z" fill="#FE8A58"/>
            </g>
            <defs>
                <clipPath id="clip0_107_1726">
                    <rect width="109.982" height="111.177" fill="white" transform="translate(29.8862 24.3)"/>
                </clipPath>
            </defs>
        </svg>
    )
}