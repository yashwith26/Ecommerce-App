import "./Footer.css"

export function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="navigations-footer">
                    <div>
                        <a href="https://www.linkedin.com/in/yashwith-salian-888829173/" target="_blank" rel="noreferrer"  className="icon-footer">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/yashwith26" target="_blank" rel="noreferrer"  className="icon-footer">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div >
                        <a href="https://twitter.com/_YS26_" target="_blank" rel="noreferrer"  className="icon-footer">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-text">
                    <p className="cr"><small>© 2023 | Infinity</small></p>
                </div>
            </div>

        </>
    )
}