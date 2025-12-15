import type { DynamicField } from "../core/DynamicField";

const CustomCheckBox: DynamicField = {
    create: () => {
        return {
            render: () => {
                return (
                    <div>
                        <input type="checkbox" />
                    </div>
                )
            }
        }
    }
}

export default CustomCheckBox
