import React from "react";
import { DirectionMenuContainer } from "./direction.styles";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";

const Directory = ({ sections }) => (

    <DirectionMenuContainer>
        {
            sections.map(({id, ...othersSectionProps}) => (
                <MenuItem key= {id}  {...othersSectionProps}/>
            ))
        }
    </DirectionMenuContainer>
        )

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);