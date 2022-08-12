import React, { ReactNode } from "react"
import { Margin } from "../components/Margin"
import { colors } from "../constraint"
import { imgUtils } from "../images/img_container"
import { Container } from "./about"
import ScrollContainer from "react-indiana-drag-scroll"

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
        <p className="text-2xl font-bold md:text-4xl "># 유성현, 포트폴리오</p>
      </Container>
      <div className="flex w-screen h-4 bg-w-back" />
      <Container>
        <Margin margin={20} />
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
          badgeText={"사내 프로젝트"}
          imgComponent={
            <ScrollContainer
              horizontal
              hideScrollbars
              className="flex w-full gap-4"
            >
              {imgUtils.pipit_web.map(image => {
                return (
                  <img src={image} className="border border-black-m w-[25%]" />
                )
              })}
            </ScrollContainer>
          }
          links={[
            {
              title: "서비스 홈페이지",
              url: "https://pipit.im",
            },
          ]}
        />
      </Container>
      <div className="flex w-screen h-4 bg-w-back"></div>
      <Container>
        <ProjectCard
          title="기상 커뮤니티 앱, Pipit"
          periodText={"2022.02 - 현재"}
          description={
            "알람 및 기상 커뮤니티 앱입니다.\n미라클 모닝과 같은 아침 시간을 활용한 자기개발 시장을 겨냥해 개발한 기상 커뮤니티 앱입니다.\n앱의 전반적인 UI/UX을 전담해 개발했습니다.\n"
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
          badgeText={"사내 프로젝트"}
          imgComponent={
            <>
              <img src={imgUtils.pipit_header} className="w-full" />
              <Margin margin={16} />
              <ScrollContainer
                horizontal
                hideScrollbars
                className="flex w-full gap-4"
              >
                {imgUtils.pipit_imgs.map(image => {
                  return (
                    <img
                      src={image}
                      className="border border-black-m w-[25%]"
                    />
                  )
                })}
              </ScrollContainer>
            </>
          }
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
      </Container>
      <div className="flex w-screen h-4 bg-w-back"></div>
      <Container>
        <ProjectCard
          title="일정, 루틴 관리 앱, 루빗"
          periodText={"2021.09 - 현재"}
          description={
            "습관, 루틴 관리 앱입니다.\n게이미피케이션과 보상회로를 통한 습관, 루틴을 더 잘 지켜나갈 수 있도록 사람들을 돕고 있습니다.\n대규모 리뉴얼 작업, 유지보수, 기능 추가 위주의 개발을 진행하고 있습니다."
          }
          whatIdos={[
            "대규모 디자인 리뉴얼, 리팩토링 작업",
            "게이미피케이션 기능 (게임 탭) 전담 개발",
            "마이크로 인터렉션 개발 ",
          ]}
          techStacks={["React-Native", "GraphQL", "Apollo"]}
          contributionPercent={35}
          badgeColor={colors.manta}
          badgeText={"사내 프로젝트"}
          imgComponent={
            <>
              <img src={imgUtils.roubit_title} className="w-full" />
              <Margin margin={16} />
              <ScrollContainer
                horizontal
                hideScrollbars
                className="flex w-full gap-4"
              >
                {imgUtils.roubit_imgs.map(image => {
                  return (
                    <img
                      src={image}
                      className="border border-black-m w-[25%]"
                    />
                  )
                })}
              </ScrollContainer>
            </>
          }
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
      </Container>
      <div className="flex w-screen h-4 bg-w-back"></div>
      <Container>
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
          badgeText={"개인 프로젝트"}
          imgComponent={
            <ScrollContainer
              horizontal
              hideScrollbars
              className="flex w-full gap-4"
            >
              {imgUtils.plp_imgs.map(image => {
                return (
                  <img src={image} className="border border-black-m w-[25%]" />
                )
              })}
            </ScrollContainer>
          }
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
      </Container>
      <div className="flex w-screen h-4 bg-w-back"></div>
      <Container>
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
          badgeText={"개인 프로젝트"}
          imgComponent={
            <ScrollContainer
              horizontal
              hideScrollbars
              className="flex w-full gap-4"
            >
              {imgUtils.osori_imgs.map(image => {
                return (
                  <img src={image} className="border border-black-m w-[25%]" />
                )
              })}
            </ScrollContainer>
          }
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
      </Container>
    </div>
  )
}

export interface Link {
  title: string
  url: string
}

interface ProjectCardProps {
  title: string
  periodText: string
  description: string
  whatIdos: string[]
  imgComponent: ReactNode
  techStacks: string[]
  links: Link[]
  contributionPercent: number
  badgeText?: string
  badgeColor?: string
}

const ProjectCard = ({
  title,
  periodText,
  description,
  imgComponent,
  whatIdos,
  techStacks,
  contributionPercent,
  badgeText,
  badgeColor,
  links,
}: ProjectCardProps) => {
  return (
    <div className="relative flex flex-col ">
      <div className="flex flex-row items-center">
        <div className="relative flex w-fit h-fit">
          <div className="absolute bottom-0 flex w-full h-3/6 bg-key-manta/25"></div>
          <p className="z-10 text-xl font-bold md:text-3xl ">{title}</p>
        </div>
        {badgeText && badgeColor && (
          <p
            className="md:ml-4 px-2 py-[2px] md:text-xs text-[0.5rem] border rounded-full hidden md:flex  "
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
      <Margin margin={24} />

      <p className="text-base font-bold md:text-lg ">개요</p>
      <Margin margin={8} />
      <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
        {description}
      </p>
      <Margin margin={24} />

      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">{`기여한 부분 (기여도: ${contributionPercent
        .toString()
        .padStart(2, "0")}%)`}</p>
      <Margin margin={8} />
      <div className="flex flex-col gap-1">
        {whatIdos.map(e => (
          <p className="ml-4 text-sm md:text-base">{e}</p>
        ))}
      </div>
      <Margin margin={24} />
      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">기술 스택</p>
      <Margin margin={8} />
      <div className="flex flex-row gap-1">
        {techStacks.map(e => (
          <p className="ml-4 text-sm md:text-base">{e}</p>
        ))}
      </div>
      <Margin margin={24} />
      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">개발 내용 (이미지)</p>
      <Margin margin={8} />
      {imgComponent}
      {/* </div> */}
      <Margin margin={24} />
      <p className="text-base font-bold md:text-lg ">링크</p>
      <Margin margin={8} />
      <div className="flex flex-col gap-2 md:gap-1 md:flex-row">
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
