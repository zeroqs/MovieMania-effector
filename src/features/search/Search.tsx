import {
  Autocomplete,
  ComboboxItem,
  Loader,
  OptionsFilter,
  rem,
} from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useUnit } from 'effector-react'

import { AutoCompleteOption } from '@/shared/ui/AutocompleteOption'

import { $loading, $options, $search, searchChanged } from './model'

export const Search = () => {
  const [search, options, loading] = useUnit([$search, $options, $loading])

  const optionsFilter: OptionsFilter = ({ options, search }) => {
    const splittedSearch = search.toLowerCase().trim().split(' ')
    return (options as ComboboxItem[]).filter((option) => {
      const words = option.label.toLowerCase().trim().split(' ')
      return splittedSearch.every((searchWord) =>
        words.some((word) => word.includes(searchWord)),
      )
    })
  }

  return (
    <Autocomplete
      dropdownOpened
      value={search}
      onChange={searchChanged}
      placeholder="Search"
      w={450}
      maxDropdownHeight={400}
      leftSection={
        <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      }
      rightSection={loading && <Loader size={16} />}
      data={options}
      renderOption={AutoCompleteOption}
      visibleFrom="xs"
      filter={optionsFilter}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  )
}
