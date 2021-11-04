import dateChange from "../../../utils/dateChange";
import { RowSBDiv } from "../../atoms/Div";
import Tag from "../../atoms/Tag";
import Profile from "../Profile";
import SortCounter from "../SortCounter";
import * as S from "./style";

export interface Props {
  title: string;
  text: string;
  is_solved: boolean;
  answer_cnt: number;
  like_count: number;
  view_count: number;
  created_at: string;
  hashtag: string[];
}

const ListItem = ({
  title,
  text,
  is_solved,
  answer_cnt = 1,
  like_count,
  view_count,
  created_at,
  hashtag,
  ...props
}: Props) => {
  return (
    <S.ListBox {...props}>
      <S.Content>
        <S.Title size="h2">{title}</S.Title>
        <S.Desc size="18" weight="normal" color="grey">
          {text}
        </S.Desc>
        <S.Bottom>
          <RowSBDiv>
            <S.Time size="14" weight="normal" color="grey">
              {dateChange(created_at)}
            </S.Time>
            {hashtag.map((data, idx) => (
              <Tag name={data?.name} key={idx} />
            ))}
          </RowSBDiv>
          <Profile size="sm" nickname="닉네임" id={0} />
        </S.Bottom>
      </S.Content>
      {/* <S.Check>{check ? <CheckImg /> : <></>}</S.Check> */}
      <S.Counter>
        <SortCounter
          name="답변"
          count={answer_cnt}
          color={is_solved ? "yellow" : "black"}
        />
        <SortCounter name="추천" count={like_count} />
        <SortCounter name="조회" count={view_count} />
      </S.Counter>
    </S.ListBox>
  );
};

export default ListItem;
