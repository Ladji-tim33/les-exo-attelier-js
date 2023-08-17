
// document.createElement("li") pour creer un <li></li>
// document.createTextNode("notre premier lecon") poue inserer di text dans li


function insererLiNode(textAinserer){
    const myliNode = document.createElement("li")
    const text = document.createTextNode(textAinserer)

    myliNodeliNode.append(text)
    list.append(myliNode)
} 

insererLiNode("notre premier lecon")
insererLiNode("notre deuxieme lecon")
insererLiNode("notre troisieme lecon")
insererLiNode("notre qutrieme lecon")
insererLiNode("notre cinqieme lecon")