function Footer() {
    return (
        <footer className="page-footer blue darken-1">
            <div className="footer-copyright blue darken-2">
                <div className="container white-text">
                    © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
}

export { Footer };