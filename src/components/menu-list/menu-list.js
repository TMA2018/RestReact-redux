import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, addToCart} from '../../actions';
import Spinner from '../spinner'
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res));
    }

    render() {
        const {menuItems, loading, addToCart} = this.props;
        if (loading) {
            return <Spinner/>
        }
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                            key={menuItem.id} 
                            menuItem={menuItem}
                            onAddToCart ={() => addToCart(menuItem.id)}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
    }
}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) => {
            dispatch({
                type: 'MENU_LOADED',
                payload: newMenu
            })
        }
    }
}*/

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));