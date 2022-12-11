# useContext

- 자식 컴포넌트의 뎁스가 많은 경우 최상위 부모컴포넌트에서 최하위 자식컴포넌트까지 값을 전달할때
- prop를 활용하여 중간 단계의 컴포넌트들이 값을 계속해서 전달해야되서 비효율적 (prop drilling)
- 이때 context api기능을 활용한 useContext hook을 활용하여 전역에서 특정 값을 관리하며 원하는 자식 컴포넌트에 바로 값을 전달 가능
- createContext로 context를 생성후 Provider로 전역으로 특정 값을 전달
- useContext로 createContext로 생성값 값을 호출가능
- provider에 value값을 직접 지정하여 state값도 전달가능
