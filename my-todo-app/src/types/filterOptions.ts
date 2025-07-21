export type FilterType = "all" | "active" | "completed";

export const filterOptions: { value: FilterType; label: string }[] = [
    { value: "all", label: "Все" },
    { value: "active", label: "Активные" },
    { value: "completed", label: "Завершённые" },
];