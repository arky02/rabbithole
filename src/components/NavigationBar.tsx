import styled from 'styled-components';
import Image from 'next/image';
import UserMenuPopup from './Popups/UserMenuPopup';
import LogoImg from '/public/icon/logo.svg';
import Button from './Buttons/Button';
import Backspace from '/public/icon/backspace.svg';
import Newspaper from '/public/icon/newspaper.svg';
import Book from '/public/icon/book.svg';
import BookWithPen from '/public/icon/bookwithpencil.svg';
import Setting from '/public/icon/setting.svg';
import Person from '/public/icon/person.svg';
import HomeBtnImg from '/public/icon/homeBtn.svg';
import StudentAlertPopup from './Popups/StudentAlertPopup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PageTitle from './PageTItle';

function Nav({ hasSideBar = false }: { hasSideBar?: boolean }) {
  const router = useRouter();
  const currPath = router.pathname;

  return (
    <ColumnWrapper $hasSideBar={hasSideBar}>
      <TopWrapper>
        <StudentAlertPopup />
        <UserMenuPopup userName="홍길동 (교사)" />
      </TopWrapper>
      <BottomMenuContainer currPath={currPath} hasSideBar={hasSideBar} />
    </ColumnWrapper>
  );
}

export default Nav;

function BottomMenuContainer({
  currPath,
  hasSideBar,
}: {
  currPath: string;
  hasSideBar: boolean;
}) {
  return currPath === '/' ? (
    <MenuOptionsWrapper>
      <Link href={'/'}>
        <Image src={LogoImg} width={128} height={85} alt="logo" />
      </Link>
      <PageTitle title="교사 홈" margin="0 0 0 70px" />
      <OptionButtons isHomePage />
    </MenuOptionsWrapper>
  ) : (
    <MenuOptionsWrapper>
      {!hasSideBar && (
        <Link href={'/'}>
          <Image src={LogoImg} width={128} height={85} alt="logo" />
        </Link>
      )}
      <OptionButtons hasSideBar={hasSideBar} />
      <HomeBtn hasSideBar={hasSideBar} />
    </MenuOptionsWrapper>
  );
}

function OptionButtons({
  isHomePage = false,
  hasSideBar = false,
}: {
  isHomePage?: boolean;
  hasSideBar?: boolean;
}) {
  const router = useRouter();

  return (
    <ButtonWrapper $hasSideBar={hasSideBar}>
      {isHomePage || (
        <Button
          type="GoBack"
          text={'이전 페이지'}
          style={{ marginRight: '30px' }}
          onClick={() => router.back()}
        >
          <Image
            src={Backspace}
            alt="돌아가기"
            style={{ marginRight: '15px' }}
          ></Image>
        </Button>
      )}
      <Button
        type="Options"
        text="수업안 관리"
        onClick={() => router.push('/manageClass')}
      >
        <Image src={Book} alt="book" style={{ marginRight: '10px' }} />
      </Button>
      <Button
        type="Options"
        text="수업 실행"
        onClick={() => router.push('/executeClass')}
      >
        <Image src={BookWithPen} alt="book" style={{ marginRight: '10px' }} />
      </Button>
      <Button type="Options" text="성적 관리">
        <Image
          src={Newspaper}
          alt="newspaper"
          style={{ marginRight: '10px' }}
        />
      </Button>
      <Button
        type="Options"
        text="학생 관리"
        onClick={() => router.push('/manageStudent')}
      >
        <Image src={Person} alt="profile" style={{ marginRight: '10px' }} />
      </Button>
      <Button type="Options" text="기타 설정">
        <Image src={Setting} alt="setting" style={{ marginRight: '10px' }} />
      </Button>
    </ButtonWrapper>
  );
}

function HomeBtn({ hasSideBar = false }: { hasSideBar?: boolean }) {
  return (
    <Link href={'/'}>
      <Image
        src={HomeBtnImg}
        alt="home"
        style={{ position: 'absolute', right: 35, top: hasSideBar ? 0 : 35 }}
      ></Image>
    </Link>
  );
}

const ColumnWrapper = styled.div<{ $hasSideBar: boolean }>`
  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ $hasSideBar }) =>
    $hasSideBar ? '0px' : '0px 1px 10px 0px rgba(0, 0, 0, 0.1)'};
  margin-left: ${({ $hasSideBar }) => ($hasSideBar ? '5px' : 0)};
  position: fixed;
  inset: 0;
  background: #ffffffea;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 5;
  justify-content: ${({ $hasSideBar }) =>
    $hasSideBar ? 'space-between' : 'flex-start'};
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 15px;
  margin-right: 24px;
`;

const MenuOptionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 0 32px;
  align-items: flex-end;
  position: relative;
`;

const ButtonWrapper = styled.div<{ $hasSideBar: boolean }>`
  display: flex;
  gap: 14px;
  align-items: flex-end;
  margin-left: ${({ $hasSideBar }) => ($hasSideBar ? '210px' : '70px')};
`;

export const TitleText = styled.h1`
  color: black;
  font-size: 40px;
  font-weight: 700;
  white-space: nowrap;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-left: 70px;
`;
