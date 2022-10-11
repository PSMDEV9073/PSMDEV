$("#header").append(`
    <nav class="navbar">
        <div class="navbar__logo">
            <a style="color: black; font-weight: bolder; line-height: 1.7;" href="../">PSMDEV</a>
        </div>

        <ul class="navbar__menu">
            <li>
                <a style="color: black; font-weight: bold;" href="../">Home</a>
            </li>
            <li>
                <a style="color: black; font-weight: bold;" href="../works">Works</a>
            </li>
            <li>
                <a style="color: black; font-weight: bold;" href="../profile">Profile</a>
            </li>
        </ul>

        <!--ul class="navbar__icons"> <li><i class="fab fa-youtube"></i></li> <li><i
        class="fab fa-facebook-f"></i></li> </ul-->

        <a class="navbar__toogleBtn">
            <i class="fas fa-bars"></i>
        </a>
    </nav>
`);

$("#m_header").append(`
    <div class="mobile-nav" style="display: none;">
        <div class="col-md-10 col-md-offset-1">
            <div class="mobile-top">
                <p>안녕하세요!</p>
                <span>PSMDEV 입니다.</span>

                <div class="hide-left-side-bar-btn cell-right">
                    <span class="btn ico">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="mobile-nav-top-banner">
                    <a>
                        <div>
                            <span>새로운 메뉴 입니다.</span>
                        </div>
                    </a>
                </div>

                <div class="mobile-nav-top-menu">
                    <a href="../">
                        <li>
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <span>Home</span>
                        </li>
                    </a>
                    <a href="../works">
                        <li>
                            <i class="fa fa-bookmark" aria-hidden="true"></i>
                            <span>Works</span>
                        </li>
                    </a>
                    <a href="../profile">
                        <li>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span>Profile</span>
                        </li>
                    </a>
                    <a href="../roadmaps">
                        <li>
                            <i class="fa fa-road" aria-hidden="true"></i>
                            <span>Roadmaps</span>
                        </li>
                    </a>
                </div>
            </div>

            <div class="middle-banner">
                <p class="middle-banner-title">제목</p>
                <p>소개</p>
            </div>
            <div class="none-bar"></div>
            <div class="bottom-nav">
                <li>
                    <i class="fa fa-file-text" aria-hidden="true"></i>
                    <p>문서</p>
                    <i class="fa fa-chevron-right right-icon" aria-hidden="true"></i>
                </li>
            </div>
            <div class="bottom-nav-copyright">
                <p>
                    Copyright © 2022 PSMDEV. All Rights Reserved
                </p>
            </div>
        </div>
    </div>
`);