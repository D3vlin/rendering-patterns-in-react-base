type ChildComponent = {
  render: (name: string) => JSX.Element
}

export const ChildComponent: React.FC<ChildComponent> = ({ render }) => {
  const name = "DevlinCode"

  return (
    <div>
      {render(name)}
    </div>
  );
};

export const ParentComponent = () => {
  return (
    <ChildComponent render={(name) => <p>Hello, {name} !</p>} />
  );
};

