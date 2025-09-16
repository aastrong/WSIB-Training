const WysiwygDemo = () => {

  return (
    <section>
      <section className="mt-10 sb-unstyled">
        <div className="p-6 border border-gray-300 rounded-md my-4">
          <h2 className="h2 border-b border-gray-300 mb-6 py-2">Default styles light</h2>
          <p>
            <strong>Bold Text</strong>
          </p>
          <p>
            <em>Italic Text</em>
          </p>
          <p>
            <strong>
              <em>Bold Italic Text</em>
            </strong>
          </p>
          <p>
            <em>
              <s>Strikethrough</s>
            </em>
          </p>
          <p>
            <strong>
              <em><s>Bold Italic Text Strikethrough</s></em>
            </strong>
          </p>
          <h3 className="h3 border-b border-gray-300 my-4 py-2">Text Styles</h3>
          <p className="body-xs">This is a content with the <strong>body-xs</strong> style</p>
          <p className="body-sm">This is a content with the <strong>body-sm</strong> style</p>
          <p className="body-md">This is a content with the <strong>body-sm</strong> style</p>
          <p className="body-lg">This is a content with the <strong>body-lg</strong> style</p>
          <p className="body-xl">This is a content with the <strong>body-xl </strong> style</p>
          <h3 className="h3 border-b border-gray-300 my-4 py-2">Unordered List</h3>
          <ul>
            <li>
              Oranges
            </li>
            <li>
              Apples
            </li>
            <li>
              Pineapples
            </li>
          </ul>
          <h3 className="h3 border-b border-gray-300 my-4 py-2">Ordered List</h3>
          <ol>
            <li>
              First Item
            </li>
            <li>
              Second Item
            </li>
            <li>
              Third Item
            </li>
          </ol>
        </div>

        <div className="p-6 dark bg-dark text-light rounded-md">
          <h2 className="h2 border-b border-gray-300 mb-6 py-2">Default styles Dark</h2>
          <p>
            <strong>Bold Text</strong>
          </p>
          <p>
            <em>Italic Text</em>
          </p>
          <p>
            <strong>
              <em>Bold Italic Text</em>
            </strong>
          </p>
          <p>
            <em>
              <s>Strikethrough</s>
            </em>
          </p>
          <p>
            <strong>
              <em><s>Bold Italic Text Strikethrough</s></em>
            </strong>
          </p>

          <h3 className="h3 border-b border-gray-300 my-4 py-2">Unordered List</h3>
          <ul>
            <li>Oranges</li>
            <li>Apples</li>
            <li>Pineapples</li>
          </ul>

          <h3 className="h3 border-b border-gray-300 my-4 py-2">Ordered List</h3>
          <ol>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
          </ol>
        </div>
      </section>
    </section>
  );
};

export default WysiwygDemo;
