import React from 'react';
import { TeacherType } from '../../../types/course';
import { DetailWrappers, IconImage, NameWrapper, TitleWrapper, Wrapper } from './TeacherDetail.model';

type Props = {
  teacher: TeacherType
};

const TeacherDetail = ({ teacher: { name, title, profileImageUrl } } : Props) => {
  return (
    <Wrapper>
      <IconImage src={profileImageUrl} alt={name} />
      <DetailWrappers>
        <NameWrapper>{name}</NameWrapper>
        <TitleWrapper>{title}</TitleWrapper>
      </DetailWrappers>
    </Wrapper>
  );
};

export default TeacherDetail;
