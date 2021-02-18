import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um atomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript. ReactJS, NextJS e StyledComponents
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor sentado na cadeira de frente para a tela"
    />
  </S.Wrapper>
)

export default Main
