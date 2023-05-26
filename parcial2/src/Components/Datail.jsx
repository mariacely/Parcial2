import React from "react";
import { FormattedMessage } from "react-intl";

function Detail({
  title,
  description,
  author,
  styles,
  year,
  publisher,
  Genre,
  available,
  Price,
  isbn,
}) {
  return (
    <div
      className={`flex flex-col gap-y-3 shadow-md border-2  border-neutral-200 rounded-lg p-4 m-4 w-[550px] ${styles}`}
    >
      <h1 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Title" />   {title}
      </h1>
      <hr />
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Isbn" />   {isbn}
      </h2>
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Author" />   {author}
      </h2>
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Publisher" />   {publisher}
      </h2>
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Genre" />   {Genre}
      </h2>
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Year" />   {year}
      </h2>
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Available" />   {available}
      </h2>
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Price" />   {Price}
      </h2>
      <h2 className="ml-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
      <FormattedMessage id="Description" />   {description}
      </h2>
    </div>
  );
}

export default Detail;
