import React, { useState } from "react";

import Box from "../components/ui/Box";
import PageTitle from "../components/ui/PageTitle";
import StarRating from "../components/ui/StarRating/StarRating";
import StarRatingCtx from "../components/ui/StarRatingCtx/StarRating";

const FeaturesPage = (): JSX.Element => {
  const [selectedStars, setSelectedStars] = useState(2);

  return (
    <div>
      <Box mt="50" mb="30">
        <PageTitle title="Features" />
      </Box>
      <Box>
        <StarRating selectedNum={selectedStars} setSelected={setSelectedStars} />
      </Box>
      <Box>
        <StarRatingCtx
          labelText={() => 'test'}
          onChangeHover={() => {}}
          onChangeValue={() => {}}
        />
      </Box>
    </div>
  )
};

export default FeaturesPage;
