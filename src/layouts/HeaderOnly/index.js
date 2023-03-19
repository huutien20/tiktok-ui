import Header from '~/layouts/compoments/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

export default HeaderOnly;
