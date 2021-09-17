import React, { useState } from 'react';

//  logic
import { Article } from '../../store/blog/actions';
import { toLowerString } from '../../utils/funcs/toLowerString';

//  ui
import Box from '../ui/Box';
import SearchList from './SearchList';
import Search from '../ui/Search';

type BlogSearchProps = {
  blogData: Article[];
  addMore: () => void;
};

const BlogSearch = ({ blogData, addMore }: BlogSearchProps): JSX.Element => {
  const [searchField, setSearchField] = useState('');
  let filteredItems = blogData.filter((item: Article) => {
    return (
      toLowerString(item.userId).includes(toLowerString(searchField)) ||
      toLowerString(item.title).includes(toLowerString(searchField)) ||
      toLowerString(item.body).includes(toLowerString(searchField))
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchField(e.target.value);
  };
  
  return (
    <div>
      <Box mb="35">
        <Search 
          ph="Search..."
          searched={handleChange}
          inputValue={searchField}
        />
      </Box>

      <SearchList 
        filtered={filteredItems}
        addMore={addMore}
      />
    </div>
  );
};

export default BlogSearch;