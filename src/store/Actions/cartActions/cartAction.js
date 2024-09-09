import { AddInCart } from "../../Reducer/cartReducer";

const generateCartItemID = (item, selectedSize) => `${item.id}-${selectedSize.id || 0}-${selectedSize.mainCatId || 0}`;

const AddItem = async (dispatch, item, cartItems, selectedSize) => {
    const cartItemID = generateCartItemID(item, selectedSize);
    const existingItemIndex = cartItems.findIndex(data => generateCartItemID(data, data.selectedSize) === cartItemID);
    if (existingItemIndex !== -1) {
        const updatedCartItems = cartItems.map((val, ind) => ind === existingItemIndex ? { ...val, qty: (val.qty || 0) + 1 } : val);
        dispatch(AddInCart(updatedCartItems));
    } else {
        const newItem = { ...item, selectedSize: selectedSize, qty: 1, cartItemID };
        dispatch(AddInCart([newItem, ...cartItems]));
    }
};

const RemoveItem = async (dispatch, item, cartItems) => {
    const cartItemID = generateCartItemID(item, item.selectedSize);
    const existingItemIndex = cartItems.findIndex(data => generateCartItemID(data, data.selectedSize) === cartItemID);

    if (existingItemIndex !== -1) {
        const updatedCartItems = cartItems.map((val, ind) =>
            ind === existingItemIndex ? { ...val, qty: val.qty - 1 } : val
        ).filter(item => item.qty > 0); // Remove items with quantity 0

        dispatch(AddInCart(updatedCartItems));
    }
};

const SelectUnSelect = async (dispatch, item, cartItems) => {
    const itemFound = cartItems?.filter((data) => data?.cartItemID == item?.cartItemID);
    const newCardData = cartItems?.map((val, ind) => {
        if (itemFound[0]?.cartItemID == val?.cartItemID) {
            return { ...val, isSelected: itemFound[0]?.isSelected == true ? false : true }
        } else {
            return { ...val }
        }
    })
    dispatch(AddInCart(newCardData))
}

const RemoveSelectedItem = async (dispatch, cartItems) => {
    const itemFound = cartItems?.filter((data) => data?.isSelected != true);
    dispatch(AddInCart(itemFound))
}

export {
    AddItem,
    RemoveItem,
    SelectUnSelect,
    RemoveSelectedItem
}