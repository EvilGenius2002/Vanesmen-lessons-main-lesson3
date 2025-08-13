import Element from "../constructor/Element.js";
import {content, content1} from "./content.js"
import header from "./header.js"
import footer from "./footer.js"


const contentBox = new Element("div", "contentBox", "")
contentBox.append(content.get())
contentBox.append(content1.get())


const body = new Element("div", "body", "")
body.append(header.get())
body.append(contentBox.get())
body.append(footer.get())



export default body;