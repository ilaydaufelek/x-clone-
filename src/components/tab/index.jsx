import Content from "./content";
import Item from "./item";
import Items from "./items";
import PropTypes from "prop-types"
import { TabContext } from "./context";
import { useState } from "react";

export default function Tab({ children, activeTab }) {
    const contents = children.filter(c => c.type === Content);
    const items = children.filter(c => c.type === Items);
    const [active, setActive] = useState(activeTab);
    const content = contents.find(c => c.props.id === active);

    const data = {
        active,
        setActive
    };

    return (
        <TabContext.Provider value={data}>
            <div className="border-b border-[color:var(--border-base)] sticky top-0 z-10 bg-[color:var(--background-primary)] backdrop-blur-2xl h-[3.313rem] ">
                {items}
            </div>
            {content}
        </TabContext.Provider>
    );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    activeTab: PropTypes.string.isRequired
};