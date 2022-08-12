import React, { ReactNode } from "react"
import { Margin } from "../components/Margin"
import { colors } from "../constraint"
import { Link } from "./portfolio"

export default () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-w-l text-b-d font-score">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-end">
          <p className="text-base md:text-lg ">
            다양한 환경에 스스로를 노출시키는 것이
          </p>
          <p className="text-base md:text-lg ">최고의 학습 전략이다</p>
        </div>
        <Margin margin={24} />
        <p className="text-2xl font-bold md:text-4xl ">
          # 반갑습니다, 유성현입니다.
        </p>
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />
      <Container>
        <p className="text-3xl font-bold md:text-4xl text-key-lidi"># Info</p>
        <Margin margin={40} />
        <div className="flex flex-col justify-between md:flex-row gap-y-4 md:gap-y-0">
          <div className="flex flex-row ">
            <div className="flex flex-col mr-2 w-fit gap-y-4 md:gap-y-4">
              <p className="text-sm font-semibold md:text-base ">국문 이름</p>
              <p className="text-sm font-semibold md:text-base ">영문 이름</p>
            </div>
            <div className="flex flex-col w-fit gap-y-4 md:gap-y-4 ">
              <p className="text-sm md:text-base ">유성현</p>
              <p className="text-sm md:text-base ">Sunghyun Yoo</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col mr-2 w-fit gap-y-4 md:gap-y-4">
              <p className="text-sm font-semibold md:text-base ">병역 사항</p>
              <p className="text-sm font-semibold md:text-base ">학력 사항</p>
            </div>
            <div className="flex flex-col w-fit gap-y-4 md:gap-y-4">
              <p className="text-sm md:text-base ">만기 전역</p>
              <p className="text-sm md:text-base ">
                중앙대학교 컴퓨터공학과 졸업
              </p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col mr-2 w-fit gap-y-4 md:gap-y-4">
              <p className="text-sm font-semibold md:text-base ">휴대전화</p>
              <p className="text-sm font-semibold md:text-base ">이메일</p>
            </div>
            <div className="flex flex-col w-fit gap-y-4 md:gap-y-4">
              <p className="text-sm md:text-base ">010-9780-9667</p>
              <p className="text-sm md:text-base ">optid77@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />
      <Container>
        <p className="text-3xl font-bold md:text-4xl text-key-lidi"># Skills</p>
        <Margin margin={40} />
        <SkillCard
          title="React Native"
          description={`함수형 컴포넌트 사용에 익숙하며, React Hook을 능숙하게 다룹니다.
Custom Hook을 통하여 비즈니스 로직을 분리하여 구조적으로 깔끔한 코드를 작성할 수 있습니다.
ApolloClient, Context API를 활용한 상태관리를 할 수 있습니다.
React-Native의 디자인 시스템인 FlexBox에 익숙하고, Figma 등으로 협업해 개발한 경험이 있습니다.
Reanimated, Animated 등을 활용한 애니메이션 제작에 능숙합니다.`}
          badgeColor={colors.lidi}
          badgeText={"Hard Skill"}
        />
        <SkillCard
          title="React"
          description={`함수형 컴포넌트 사용에 익숙하며, React Hook을 능숙하게 다룹니다.
Custom Hook을 통하여 비즈니스 로직을 분리하여 구조적으로 깔끔한 코드를 작성할 수 있습니다.
Tailwind CSS 또는 미디어 쿼리를 활용해 반응형 웹 페이지를 개발할 수 있습니다.`}
          badgeColor={colors.lidi}
          badgeText={"Hard Skill"}
        />
        <SkillCard
          title="Apollo Client / GQL"
          description={`서버에 Query 또는 Mutation 요청을 통해 데이터를 읽고, 수정할 수 있습니다.
Fragment를 활용해 반복되는 필드셋을 분리하고 재사용할 수 있습니다.
Apollo Client의 캐시 시스템에 대해 이해하고 상태 관리에 활용할 수 있습니다.`}
          badgeColor={colors.lidi}
          badgeText={"Hard Skill"}
        />
        <SkillCard
          title="JavaScript / TypeScript"
          description={`ES6+ 문법에 익숙하며 능숙하게 다룹니다.
생산성 향상을 위해 NodeJS를 활용해 자동화 스크립트를 작성한 경험이 있습니다.
Promise / Async 등 비동기 프로그래밍을 할 수 있습니다.`}
          badgeColor={colors.lidi}
          badgeText={"Hard Skill"}
        />
        <SkillCard
          title="소통 능력"
          description={`소통의 기본인 경청과 의견 정리에 능숙합니다.
다가가기 쉽고, 상대를 편하게 할 수 있는 소통 방법을 지향합니다.
그 결과, 팀 회고에서 "경청과 친절함으로 부담없이 소통할 수 있어 좋다"는 평가를 받아왔습니다.`}
          badgeColor={colors.manta}
          badgeText={"Soft Skill"}
        />
        <SkillCard
          title="스타트업 정신"
          description={`빠르게 성장하는 스타트업에서 일하며 Lean한 업무 방식을 지향합니다.
지표와 반복되는 실험을 통한 가설 검증의 사이클에 익숙합니다.
단순히 주어진 개발만 하는 것이 아닌, 팀의 일원으로 문제를 해결하는 것을 즐깁니다.`}
          badgeColor={colors.manta}
          badgeText={"Soft Skill"}
        />
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />
      <Container>
        <p className="text-3xl font-bold md:text-4xl text-key-lidi"># Career</p>
        <Margin margin={40} />
        <Company
          title="Roubit Inc"
          position="FE Developer / 정규직"
          periodText="2021.09.01 - 현재"
        >
          <>
            <ProjectCard
              title="기상 커뮤니티 앱, Pipit 웹 사이트"
              periodText={"2022.08 - 2022.08"}
              description={
                "알람 및 기상 커뮤니티 앱, Pipit의 홈페이지와 런칭 전 사전예약 페이지, 이벤트 웹 사이트를 개발했습니다.\n서버 API와 배포를 제외한 나머지 부분을 모두 맡아 개발을 진행하였고, 2주 정도가 소요되었습니다."
              }
              whatIdos={[
                "React를 활용해 홈페이지, 사전예약 페이지, 이벤트 웹 사이트를 제작",
                "Tailwind CSS, 미디어 쿼리를 활용한 반응형 웹 사이트 개발",
              ]}
              techStacks={["React", "Tailwind CSS", "GraphQL", "Apollo"]}
              contributionPercent={90}
              badgeColor={colors.manta}
              badgeText={"WEB"}
              links={[
                {
                  title: "서비스 홈페이지",
                  url: "https://pipit.im",
                },
              ]}
            />
            <ProjectCard
              title="기상 커뮤니티 앱, Pipit"
              periodText={"2022.02 - 현재"}
              description={
                "알람 및 기상 커뮤니티 앱입니다. 미라클 모닝과 같은 아침 시간을 활용한 자기개발 시장을 겨냥해 개발한 기상 커뮤니티 앱입니다.\n앱의 전반적인 UI/UX을 전담해 개발했습니다.\n"
              }
              whatIdos={[
                "앱의 전체적인 UI/UX 개발",
                "아마존 S3를 활용해 이미지가 포함된 게시글 기능 구현",
                "i18n을 활용한 다국어 지원 구현",
                "마이크로 인터렉션 개발",
              ]}
              techStacks={["React-Native", "React", "GraphQL", "Apollo"]}
              contributionPercent={50}
              badgeColor={colors.manta}
              badgeText={"APP"}
              links={[
                {
                  title: "서비스 홈페이지",
                  url: "https://pipit.im",
                },
                {
                  title: "앱스토어 링크",
                  url: "https://apps.apple.com/kr/app/id1631253620",
                },
                {
                  title: "플레이스토어 링크",
                  url: "https://play.google.com/store/apps/details?id=com.im.pipit",
                },
              ]}
            />
            <ProjectCard
              title="일정, 루틴 관리 앱, 루빗"
              periodText={"2021.09 - 현재"}
              description={
                "습관, 루틴 관리 앱입니다. 게이미피케이션과 보상회로를 통한 습관, 루틴을 더 잘 지켜나갈 수 있도록 사람들을 돕고 있습니다.\n대규모 리뉴얼 작업, 유지보수, 기능 추가 위주의 개발을 진행하고 있습니다."
              }
              whatIdos={[
                "대규모 디자인 리뉴얼, 리팩토링 작업",
                "게이미피케이션 기능 (게임 탭) 전담 개발",
                "마이크로 인터렉션 개발 ",
              ]}
              techStacks={["React-Native", "GraphQL", "Apollo"]}
              contributionPercent={35}
              badgeColor={colors.manta}
              badgeText={"APP"}
              links={[
                {
                  title: "서비스 홈페이지",
                  url: "https://www.roubit.me",
                },
                {
                  title: "앱스토어 링크",
                  url: "https://apps.apple.com/kr/app/id1527382961",
                },
                {
                  title: "플레이스토어 링크",
                  url: "https://play.google.com/store/apps/details?id=com.roubit",
                },
              ]}
            />
          </>
        </Company>
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />
      <Container>
        <div className="flex flex-row items-baseline">
          <p className="text-3xl font-bold md:text-4xl text-key-lidi">
            # Projects
          </p>

          <a
            href="https://blog.sunghyun.co/portfolio"
            className="ml-4 text-base font-medium text-key-lidi md:text-sm"
          >
            : 포트폴리오 링크
          </a>
        </div>

        <Margin margin={40} />
        <Company
          title="점선면 (중앙대학교)"
          position="App Developer / Team Leader"
          periodText="2021.02 - 2021.12"
        >
          <>
            <ProjectCard
              title="인적성 공간지각 문제풀이 앱, 점선면"
              periodText={"2021.02 - 2021.12"}
              description={
                "GSAT, HMAT 등 대기업 인적성 중 공간지각 유형 문제풀이 앱입니다.\n크로스 플랫폼인 플러터를 통하여 개발하였습니다.\n자체 개발한 문제 생성 알고리즘을 통해 문제와 3D 객체 등을 생성합니다.\n생성된 문제는 풀이, 레벨 테스트, 통계 등에서 활용하도록 구현하였습니다."
              }
              whatIdos={[
                "프로젝트의 전반적인 일정 관리를 담당",
                "Xd를 활용한 앱의 UI 디자인",
                "Flutter를 활용한 전반적인 UI 개발",
              ]}
              techStacks={["Flutter", "Adobe XD"]}
              contributionPercent={40}
              badgeColor={colors.manta}
              badgeText={"APP"}
              links={[
                {
                  title: "깃허브 레포지토리",
                  url: "https://github.com/StationSoen/Capstone",
                },
                {
                  title: "앱스토어 링크",
                  url: "https://apps.apple.com/kr/app/id1585635701",
                },
                {
                  title: "플레이스토어 링크",
                  url: "https://play.google.com/store/apps/details?id=com.soen.pointlineplane",
                },
              ]}
            />
          </>
        </Company>
        <Company
          title="오소리 (충북학사)"
          position="App Team Leader"
          periodText="2021.02 - 현재"
        >
          <>
            <ProjectCard
              title="지역학사 식단/출입 앱, 오소리"
              periodText={"2021.02 - 현재"}
              description={
                "서울에 소재 지역학사인 충북학사 서/동서울관 식단, 출입 앱입니다.\nFlutter를 활용한 앱 개발을 맡았습니다.\n저를 포함한 개발팀이 졸업으로 학사를 떠나게 되어, 충북학사 내부 동아리를 만들어 유지보수를 진행하고 있습니다."
              }
              whatIdos={[
                "Flutter를 활용한 앱 전체 개발",
                "출입 관련 웹페이지 역설계를 통한 출입 기능 구현",
                "React-Native로의 리뉴얼 작업 진행 중",
              ]}
              techStacks={["Flutter", "Adobe XD"]}
              contributionPercent={70}
              badgeColor={colors.manta}
              badgeText={"APP"}
              links={[
                {
                  title: "깃허브 레포지토리",
                  url: "https://github.com/kyw2271/cbhs_app",
                },
                {
                  title: "앱스토어 링크",
                  url: "https://apps.apple.com/kr/app/id1556278144",
                },
                {
                  title: "플레이스토어 링크",
                  url: "https://play.google.com/store/apps/details?id=com.soen.osori",
                },
              ]}
            />
          </>
        </Company>
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />
      <Container>
        <p className="text-3xl font-bold md:text-4xl text-key-lidi">
          # Activities
        </p>
        <Margin margin={40} />
        <Company title="교육">
          <SimpleProjectCard
            periodText="2016.03 - 2022.02"
            title="중앙대학교 컴퓨터공학과"
            description={"중앙대학교 컴퓨터공학과 학사 졸업.\nGPA: 3.4/4.5"}
          />
        </Company>
        <Margin margin={40} />
        <Company title="자격">
          <SimpleProjectCard
            periodText="2021.08"
            title="정보처리기사 취득"
            description={"정보처리기사를 취득했습니다."}
          />
        </Company>
        <Margin margin={40} />
        <Company title="수상">
          <SimpleProjectCard
            title="CAU 공학학술제 소프트웨어대학장상"
            periodText="2021.12"
            description={
              '"인적성 공간지각 유형 문제풀이 앱, 점선면" 프로젝트로\n소프트웨어대학장상을 수상하였습니다.'
            }
          />
          <SimpleProjectCard
            periodText="2021.11"
            title="다빈치 SW/AI TECH FAIR 우수상"
            description={
              '"인적성 공간지각 유형 문제풀이 앱, 점선면" 프로젝트로\n우수상을 수상하였습니다.'
            }
          />
        </Company>
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />
      <Container>
        <p className="text-3xl font-bold md:text-4xl text-key-lidi"># Links</p>
        <Margin margin={40} />
        <a
          className="text-sm md:text-base w-fit "
          href="https://blog.sunghyun.co"
        >
          블로그 링크 : https://blog.sunghyun.co
        </a>
        <Margin margin={12} />
        <a
          className="text-sm md:text-base w-fit "
          href="https://portfolio.sunghyun.co"
        >
          포트폴리오 링크 : https://portfolio.sunghyun.co
        </a>
        <Margin margin={12} />
        <a
          className="text-sm md:text-base w-fit "
          href="https://github.com/StationSoen"
        >
          깃허브 링크 : https://blog.sunghyun.co/portfolio
        </a>
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />

      <Container>
        <div className="flex flex-row justify-end w-full">
          <Margin margin={40} />
          <p className="text-xs md:text-sm w-fit">Last Update: 2022.08.13</p>
          <Margin margin={40} />
        </div>
      </Container>
    </div>
  )
}

export const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex flex-col w-full max-w-4xl px-6 py-10 md:px-10 column ">
      {children}
    </div>
  )
}

interface CompanyProps {
  title: string
  position?: string
  periodText?: string
  children: ReactNode
}

const Company = ({ title, position, periodText, children }: CompanyProps) => {
  return (
    <div className="flex flex-col flex-1 w-full md:flex-row ">
      {/* 회사명 */}
      <div className="flex flex-col w-full mb-4 md:mb-0 md:w-2/6 ">
        <div className="relative flex w-fit h-fit">
          <div className="absolute bottom-0 flex w-full h-3/6 bg-key-lidi/25"></div>
          <p className="z-10 text-2xl font-bold ">{title}</p>
        </div>
        {periodText && (
          <>
            <Margin margin={8} />
            <p className="ml-2 text-sm ">{periodText}</p>
          </>
        )}
        {position && (
          <>
            <Margin margin={4} />
            <p className="ml-2 text-sm ">{position}</p>
          </>
        )}
      </div>
      <div className="flex flex-col w-full md:w-4/6 ">{children}</div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  periodText: string
  description: string
  whatIdos: string[]
  techStacks: string[]
  contributionPercent: number
  badgeText?: string
  badgeColor?: string
  links: Link[]
}

const ProjectCard = ({
  title,
  periodText,
  description,
  whatIdos,
  techStacks,
  contributionPercent,
  badgeText,
  badgeColor,
  links,
}: ProjectCardProps) => {
  return (
    <div className="relative flex flex-col ">
      <div className="flex absolute h-[85%] w-1 bg-w-d/25 left-[-24px] md:visible invisible " />
      <div className="flex flex-row items-center">
        <div className="relative flex w-fit h-fit">
          <div className="absolute bottom-0 flex w-full h-3/6 bg-key-manta/25"></div>
          <p className="z-10 text-xl font-bold md:text-2xl ">{title}</p>
        </div>
        {badgeText && badgeColor && (
          <p
            className="ml-2 md:ml-4 px-1 md:px-2 text-[0.5rem] md:text-xs border rounded-full hidden md:flex "
            style={{
              borderColor: badgeColor,
              color: badgeColor,
            }}
          >
            {badgeText}
          </p>
        )}
      </div>
      <Margin margin={4} />
      <p className="ml-4 text-xs md:text-sm ">{periodText}</p>
      <Margin margin={16} />

      <p className="text-base font-bold md:text-lg ">개요</p>
      <Margin margin={8} />
      <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
        {description}
      </p>
      <Margin margin={16} />

      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">{`기여한 부분 (기여도: ${contributionPercent
        .toString()
        .padStart(2, "0")}%)`}</p>
      <Margin margin={8} />
      <div className="flex flex-col gap-1">
        {whatIdos.map(e => (
          <p className="ml-4 text-sm md:text-base ">{e}</p>
        ))}
      </div>
      <Margin margin={16} />
      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">기술 스택</p>
      <Margin margin={8} />
      <div className="flex flex-row gap-1">
        {techStacks.map(e => (
          <p className="ml-4 text-sm md:text-base ">{e}</p>
        ))}
      </div>
      <Margin margin={16} />
      <p className="text-base font-bold md:text-lg ">링크</p>
      <Margin margin={8} />
      <div className="flex flex-row gap-1">
        {links.map(e => (
          <a href={e.url} className="ml-4 text-sm md:text-base ">
            {e.title}
          </a>
        ))}
      </div>
      <Margin margin={40} />
    </div>
  )
}

interface SkillCardProps {
  title: string
  description: string
  badgeText: string
  badgeColor: string
}

const SkillCard = ({
  title,
  description,
  badgeText,
  badgeColor,
}: SkillCardProps) => {
  return (
    <div className="relative flex flex-col ">
      <div className="flex flex-row items-center gap-x-4">
        <div className="relative flex w-fit h-fit">
          <div
            className="absolute bottom-0 flex w-full h-3/6"
            style={{
              backgroundColor: badgeColor + "40",
            }}
          ></div>
          <p className="z-10 text-xl font-bold md:text-2xl ">{title}</p>
        </div>

        <p
          className="px-1 md:px-2 text-[0.5rem] md:text-xs border rounded-full hidden md:flex "
          style={{
            borderColor: badgeColor,
            color: badgeColor,
          }}
        >
          {badgeText}
        </p>
      </div>
      <Margin margin={16} />

      <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
        {description}
      </p>
      <Margin margin={40} />
    </div>
  )
}

interface SimpleProjectCard {
  title: string
  descriptionTitle?: string
  description: string
  periodText
}

const SimpleProjectCard = ({
  title,
  descriptionTitle,
  description,
  periodText,
}: SimpleProjectCard) => {
  return (
    <div className="relative flex flex-col ">
      <div className="flex absolute h-[85%] w-1 bg-w-d/25 left-[-24px] md:visible invisible  " />
      <div className="relative flex w-fit h-fit">
        <div className="absolute bottom-0 flex w-full h-3/6 bg-key-manta/25"></div>
        <p className="z-10 text-xl font-bold md:text-2xl ">{title}</p>
      </div>
      <Margin margin={4} />
      <p className="ml-4 text-xs md:text-sm ">{periodText}</p>
      <Margin margin={8} />

      {descriptionTitle && (
        <>
          <p className="text-base font-bold md:text-lg ">{descriptionTitle}</p>
          <Margin margin={8} />
        </>
      )}
      <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
        {description}
      </p>
      <div className="flex w-full h-3 md:h-10" />
    </div>
  )
}
