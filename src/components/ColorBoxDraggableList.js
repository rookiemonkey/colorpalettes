import React from 'react';
import shortid from 'shortid';
import { SortableContainer } from 'react-sortable-hoc';
import ColorBoxDraggable from './ColorBoxDraggable';

const ColorBoxDraggableList = ({ colorBoxes, handleDelete }) => {
    return (
        <div style={{ height: '100%' }}>
            {
                colorBoxes.map((color, i) => {
                    return <ColorBoxDraggable
                        index={i} // important for sorting
                        handleDelete={handleDelete}
                        color={color}
                        key={shortid.generate()}
                    />
                })
            }
        </div>
    )
}

export default SortableContainer(ColorBoxDraggableList)