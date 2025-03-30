import { useState } from "react";

type ToggleProps = {
  isToggle?: boolean
  onToggle?: (value: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = ({isToggle = false, onToggle}) => {
  const [internalToggle, setInternalToggle] = useState(isToggle)

  const toggle = () => {
    const newToggle = !internalToggle
    setInternalToggle(newToggle)

    if (onToggle) {
      onToggle(newToggle)
    }
  }
  return (
    <button onClick={toggle}>
      {internalToggle ? "ON 😁": "OFF 😑"}
    </button>
  );
};

export const ParentComponent = () => {
  const [toggleState, setToggleState] = useState(false)

  return (
    <div>
      <p>Toggle Is {toggleState ? "ON 😁": "OFF 😑"}</p>
      <Toggle isToggle={toggleState} onToggle={setToggleState} />
    </div>
  );
};
