import SuperButton from "../ui/c2-SuperButton/SuperButton";
import SuperCheckbox from "../ui/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../ui/c1-SuperInputText/SuperInputText";

export const Test = () => {
    return (
        <>
            <h1>Super component</h1>
            <div style={{display: 'flex', columnGap: 20, alignItems: 'center'}}>
                <SuperButton>SuperButton</SuperButton>
                <SuperCheckbox>SuperCheckbox</SuperCheckbox>
                <SuperInputText/>
            </div>
        </>
    );
};
