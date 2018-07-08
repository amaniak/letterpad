import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";
import sizeMe from "react-sizeme";

import List from "./List";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #d3d3d3;
    height: ${({ rowHeight, isOpen, numRows }) =>
        `${isOpen ? numRows * rowHeight : 40}px`};
    flex-direction: column;
    user-select: none;
`;

const ListItem = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1.15rem;
    background-color: ${({ selected, index }) =>
        selected === index && "#1a82d6"};
    color: ${({ selected, index }) => selected === index && "white"};
    &:hover {
        background-color: ${({ index, selected }) =>
            selected === index ? "#1a82d6" : rgba("#1a82d6", 0.5)};
    }
    cursor: pointer;
`;

class Accordion extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        rowHeight: PropTypes.number.isRequired,
        numRows: PropTypes.number,
        handleSelect: PropTypes.func.isRequired,
        size: PropTypes.object,
        selectedIndex: PropTypes.number
    };

    static defaultProps = {
        numRows: 4,
        rowHeight: 40
    };

    state = {
        isOpen: true,
        selected: this.props.selectedIndex || 0
    };

    static getDerivedStateFromProps(newProps, oldState) {
        if (oldState.selected != newProps.selected) {
            return { selected: newProps.selected };
        }
        return null;
    }

    handleOpen = () => {
        this.setState(s => ({ isOpen: !s.isOpen }));
    };

    handleClick = (index, item) => {
        const { handleSelect } = this.props;

        this.setState({ selected: index });

        handleSelect(index, item);
    };

    render() {
        const { isOpen, selected } = this.state;
        const { items, rowHeight, numRows, size } = this.props;

        return (
            <Wrapper isOpen={isOpen} rowHeight={rowHeight} numRows={numRows}>
                {isOpen && (
                    <List
                        width={size.width - 2}
                        height={numRows * rowHeight}
                        rowCount={items.length}
                        rowHeight={rowHeight}
                        rowRenderer={({ key, index, style }) => (
                            <ListItem
                                key={key}
                                style={style}
                                index={index}
                                selected={selected}
                                onClick={() =>
                                    this.handleClick(index, items[index])
                                }
                            >
                                {items[index].name}
                            </ListItem>
                        )}
                    />
                )}
            </Wrapper>
        );
    }
}

export default sizeMe()(Accordion);
