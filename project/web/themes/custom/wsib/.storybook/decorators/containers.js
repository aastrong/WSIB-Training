export const DefaultContainerDecorator = (Story) => {
  return (
    <section className="px-5 mx-auto container ">
      <Story />
    </section>
  );
};
