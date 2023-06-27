import {makeAutoObservable} from "mobx";

export default class CategoryStore {
    constructor() {
        makeAutoObservable(this, {}, {autobind: true})
        this._types = []
        this._categorys = []
        this._messages = []
        this._dialogs = []
        this._selectedType = {}
        this._selectedCategory = {}
        this._selectedMessage = {}
    }

    setTypes(types) {
        this._types = types
    }
    setCategorys(categorys) {
        this._categorys = categorys
    }

    setMessages = (messages) => {
        this._messages = messages
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedMessage(message) {
        this._selectedMessage = message
    }

    get types() {
        return this._types
    }
    get categorys() {
        return this._categorys
    }
    get messages() {
        return this._messages
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedMessage() {
        return this._selectedMessage
    }
}