
import KeywordsFormat from "../KeywordsFormat";

const BooksFormat = ({ bib }) => {
    const {
        authors,
        title,
        edition,
        editors,
        publisher,
        address,
        year,
        pages,
        keywords,
    } = bib;
    return (
        <li>
            {`${authors}, `}
            <b>{`${title}, `}</b>
            <span>{edition ? `Edition ${edition}` : null}</span>
            <span>{pages ? `, Number of Pages: ${pages}` : null}</span>
            <em>{publisher ? `, ${publisher}` : null}</em>
            <span>{address ? ` ${address}` : null}</span>
            <span>{year ? `, ${year}` : null}</span>
            {editors ? (
                <span>
                    {", "}
                    <b>Editors: </b>
                    {editors}
                </span>
            ) : null}

            <KeywordsFormat keywords={keywords} />
        </li>
    );
};

const BookChaptersFormat = ({ bib }) => {
    const {
        authors,
        title,
        book, 
        pages, 
        publisher, 
        year, 
        editors, 
        keywords,
    } = bib;
    return (
        <li>
            {`${authors}, `}
            <b>{`${title}, `}</b>
            <em>{book}</em>
            <span>{pages ? `, Page Range: ${pages}` : null}</span>
            <em>{publisher ? `, ${publisher}` : null}</em>
            <span>{year ? `, ${year}` : null}</span>
            {editors ? (
                <span>
                    {", "}
                    <b>Editors: </b>
                    {editors}
                </span>
            ) : null}

            <KeywordsFormat keywords={keywords} />
        </li>
    );
};


export { BooksFormat, BookChaptersFormat };
