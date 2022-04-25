import {useContext} from "react";
import Image from "next/image";
import {Box, Icon, Flex} from "@chakra-ui/react"
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Flex justifyContent = "center" alignItems = "center" marginRight = "1">
            <Icon
                as = {FaArrowAltCircleLeft}
                onClick = {() => scrollPrev()}
                fontSize = "2xl"
                cursor = "pointer"
            />
        </Flex>
    )
}
const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Flex justifyContent = "center" alignItems = "center" marginRight = "1">
            <Icon
                as = {FaArrowAltCircleRight}
                onClick = {() => scrollNext()}
                fontSize = "2xl"
                cursor = "pointer"
            />
        </Flex>
    )
}

export default function ImageScrollBar({data}) {
    return (
    <ScrollMenu LeftArrow = {LeftArrow} RightArrow = {RightArrow} style = {{overflow: "hidden"}}>
        {data.map((items) => (
            <Box width = "910px" itemId = {items.id} overflow = "hidden" p = "1">
                <Image placeholder = "blur" blurDataURL = {items.url} src = {items.url} width = {1000} height = {500} key = {items.id} sizes = "(max-width: 500px) 100px, (max-width): 1023px 400px, 1000px" alt= "property" />
            </Box>
        ))}
    </ScrollMenu>
    );
}
