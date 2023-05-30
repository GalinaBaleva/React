import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = ({ games }) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}

            {games.length > 0
                ? games.map(x => <CatalogItem game={x} />)

                : <h3 className="no-articles">No articles yet</h3>}

        </section>
    );
}

export default Catalog;