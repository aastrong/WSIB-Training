const TypographyDemo = () => {

  return (
    <section>
      <section className="mt-10 sb-unstyled">
        <div className="p-6 border border-gray-300 rounded-md my-4">
          <h2 className="h2 border-b border-gray-300 mb-6 py-2">Headings light</h2>
          <h1 className="h1--big">H1 Big Design System</h1>
          <h1 className="h1">H1 Design System</h1>
          <h2 className="h2">H2 Design System</h2>
          <h3 className="h3">H3 Design System</h3>
          <h4 className="h4">H4 Design System</h4>
          <h5 className="h5">H5 Design System</h5>
          <h6 className="h6">H6 Design System</h6>
        </div>

        <div className="p-6 dark bg-dark text-light rounded-md">
          <h2 className="h2 border-b border-gray-300 my-6 py-2">Headings Dark</h2>
          <h1 className="h1--big">H1 Big Design System</h1>
          <h1 className="h1">H1 Design System</h1>
          <h2 className="h2">H2 Design System</h2>
          <h3 className="h3">H3 Design System</h3>
          <h4 className="h4">H4 Design System</h4>
          <h5 className="h5">H5 Design System</h5>
          <h6 className="h6">H6 Design System</h6>
        </div>

        <div className="p-6 border border-gray-300 rounded-md my-4">
          <h2 className="h2 border-b border-gray-300 mb-6 py-2">Others typography styles</h2>
          <p>Default body text</p>
          <p className="body-xs">This is a content with the <strong>body-xs</strong> style</p>
          <p className="body-sm">This is a content with the <strong>body-sm</strong> style</p>
          <p className="body-md">This is a content with the <strong>body-sm</strong> style</p>
          <p className="body-lg">This is a content with the <strong>body-lg</strong> style</p>
          <p className="body-xl">This is a content with the <strong>body-xl </strong> style</p>
          <p className="text-metric">This is a content with the <strong>text-metric</strong> style</p>
          <p className="text-drop-cap">text-drop-cap style</p>
        </div>

        <div className="p-6 dark bg-dark text-light rounded-md">
          <h2 className="h2 border-b border-gray-300 mb-6 py-2">Others typography styles dark</h2>
          <p>Default body text</p>
          <p className="body-xs">This is a content with the <strong>body-xs</strong> style</p>
          <p className="body-sm">This is a content with the <strong>body-sm</strong> style</p>
          <p className="body-md">This is a content with the <strong>body-sm</strong> style</p>
          <p className="body-lg">This is a content with the <strong>body-lg</strong> style</p>
          <p className="body-xl">This is a content with the <strong>body-xl </strong> style</p>
          <p className="text-metric">This is a content with the <strong>text-metric</strong> style</p>
          <p className="text-drop-cap">text-drop-cap style</p>
        </div>
      </section>
    </section>
  );
};

export default TypographyDemo;
