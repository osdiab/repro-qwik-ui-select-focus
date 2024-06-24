import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";
import { Select } from "@qwik-ui/headless";

const options = ["asdf", "bcde", "cdef"]
export const ReproSelect = component$(
	() => {
		const selectedOption = useSignal("asdf");
		const handleChange = $((selected: string): void => {
			selectedOption.value = selected;
		});

		return (
			<Select.Root onChange$={handleChange}>
				<Select.Label>Choose</Select.Label>
				<Select.Trigger>
					<Select.DisplayValue placeholder="select a value" />
				</Select.Trigger>
				<Select.Popover>
					<Select.Listbox
						style={{background: "white", border: "1px solid gray"}}
					>
						{options.map((option) => (
							<Select.Item
								key={option}
								value={option}
							>
								<Select.ItemLabel>
									{option}
								</Select.ItemLabel>
							</Select.Item>
						))}
					</Select.Listbox>
				</Select.Popover>
			</Select.Root>
		);
	},
);
