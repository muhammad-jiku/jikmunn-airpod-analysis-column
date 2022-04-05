import React from 'react';

const Blogs = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-blue-900 my-5">What is context api?</h2>
      <p className="text-justify">
        Prop drilling is the processing of getting data from grandparent
        component to parent component to child component by passing it through
        all levels of intermediary React components.
        <strong> React Context API </strong>also means sharing data with
        multiple components, but without passing data through props manually.
        The Context API is a way for a React app to produce global variables
        that can be passed around and exchange unique details and assist in
        solving prop-drilling from all levels of react application. By importing
        createContext() from react, It returns a consumer and a provider.
        Provider is a component provides the state to its children component and
        hold the "store" and be the parent component of all the components that
        might need that store. Consumer is a component that consumes and uses
        the state.
      </p>

      <h2 className="text-3xl text-blue-900 my-5">What is semantic tag?</h2>
      <p className="text-justify">
        Semantic HTML tags provide information about the contents of those tags
        that goes beyond just how they look on a page. Text that is enclosed in
        the tag is immediately recognized by the browser as some type of coding
        language. It describes the purpose of the element and the type of
        content that is inside these tags. It describes its meaning to both the
        browser and the developer. That clarity is also communicated with search
        engines, ensuring that the right pages are delivered for the right
        queries. It also gives more hooks for styling content.
      </p>

      <h2 className="text-3xl text-blue-900 my-5">
        Differences between inline, block and inline-block elements?
      </h2>
      <p className="text-justify">
        <strong> inline </strong>elements don't start on a new line, they appear
        on the same line as the content and tags beside them. Browsers treat
        inline elements differently about margining and padding, margin or
        padding can be add space to the left and right on an inline element, but
        cannot be add height to the top or bottom of an inline element. width or
        height can not be set.
        <strong> A block </strong> element always starts on a new line, and
        fills up the horizontal space left and right on the web page. margins
        and padding can be add on all four sides of any block element — top,
        right, left, and bottom. And width and height values can also be set .
        <strong> inline-block </strong>it's formatted just like the inline
        element, where it doesn't start on a new line. BUT, width and height
        values can be set and also padding and margins can be added on all four
        sides.
      </p>
    </div>
  );
};

export default Blogs;
