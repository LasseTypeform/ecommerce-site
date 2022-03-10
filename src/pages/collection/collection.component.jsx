import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { 
    CollectionPageConatiner,
    CollectionTitle,
    CollectionItemContainer
} from './collection.styles.jsx';

const CollectionPage = ({ collection }) => {
    
    const { title, items } = collection;

    return (
    <CollectionPageConatiner>
        <CollectionTitle>{ title }</CollectionTitle>
        <CollectionItemContainer>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </CollectionItemContainer>
    </CollectionPageConatiner>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);