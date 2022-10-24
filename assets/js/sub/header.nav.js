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
                <a style="color: black; font-weight: bold;" href="../newswire">Newswire</a>
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
                    <span class="btn ico" style="font-size: 20px;">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="mobile-nav-top-banner">
                    <a>
                        <div>
                            <span>신규 메뉴 입니다.</span>
                        </div>
                    </a>
                </div>

                <div class="mobile-nav-top-menu">
                    <ul>
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
                    </ul>
                    <ul>
                        <a href="../newswire">
                            <li>
                                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                                <span>Newswire</span>
                            </li>
                        </a>
                        <a href="../t/terms">
                            <li>
                                <i class="fa fa-file-text" aria-hidden="true"></i>
                                <span>Terms</span>
                            </li>
                        </a>
                        <a href="../t/license">
                            <li>
                                <i class="fa fa-file-text" aria-hidden="true"></i>
                                <span>License</span>
                            </li>
                        </a>
                        <a>
                            <li>
                                <i class="fa fa-add" aria-hidden="true"></i>
                                <span>추가예정</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>

            <div class="middle-banner">
                <p class="middle-banner-title">PSMDEV 업데이트!</p>
                <p>1.0.3 -> 2.0.0 으로 변경 되었습니다.</p>
            </div>

            <div class="none-bar"></div>
            <div style="padding-top: 20px; border-bottom: 2px rgba(000, 000, 000, 0.1) solid;"></div>

            <div class="bottom-nav-copyright">
                <p>
                    Copyright © 2022 PSMDEV. All Rights Reserved
                </p>
            </div>
        </div>
    </div>
`);