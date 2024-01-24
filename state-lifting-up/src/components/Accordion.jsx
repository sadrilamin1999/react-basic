import { useState } from "react";
import Panel from "./Panel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container">
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
        repellendus dolorum vero esse. Eos ea nam id ipsam obcaecati alias
        repellendus, veniam explicabo iure omnis numquam. Aperiam, beatae! Sequi
        voluptatum quidem a aliquam eaque provident suscipit similique ut
        soluta? Necessitatibus?
      </Panel>
      <Panel
        title="My self"
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corrupti
        beatae? Esse sunt dolorum nisi doloribus reiciendis, nostrum animi iusto
        aperiam eveniet earum nulla cum velit! Labore aspernatur sint sapiente
        tempore iure optio temporibus? Reprehenderit aliquid veniam pariatur
        laudantium dolore!
      </Panel>
    </div>
  );
};

export default Accordion;
