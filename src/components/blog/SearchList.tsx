import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

//  logic
import { Article } from "../../store/blog/actions";
import { StoreState } from "../../store/rootReducer";

//  ui
import BlogArticle from './BlogArticle';

const useStyles = makeStyles((theme: Theme) => ({
  addBtn: {
    cursor: 'pointer',
  },
  noResults: {
    width: '100%',
    marginTop: 20,
    textAlign: 'center',
  }
}));

type SearchListProps = {
  filtered: Article[];
  addMore: () => void;
};

const SearchList = ({ filtered, addMore }: SearchListProps): JSX.Element => {
  const classes = useStyles();
  const currentArticleId = useSelector((state: StoreState) => state.blog.articleId);

  const filteredItems = filtered.map((item) => {
    const active = currentArticleId === item.id;

    return (
      <BlogArticle 
        key={item.id}
        id={item.id}
        tag={item.userId}
        title={item.title}
        text={item.body}
        activeStatus={active}
      />
    );
  });

  return (
    <>
      {
        filteredItems.length > 0 
          ? filteredItems 
          : <div className={classes.noResults}>Sorry, no results.</div>
      }

      {
        filteredItems.length > 0 && 
          <div className={classes.addBtn} onClick={addMore}>
            <Typography variant="body2">More...</Typography>
          </div>
      }
    </>
  );
};

export default SearchList;