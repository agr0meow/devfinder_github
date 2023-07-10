import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { useState } from "react";
import { GithubUser, LocalGithubUser, GithubError } from "types";
import { extractLocalUser } from "utils/exract-local-user";
import { isGithubUser } from "utils/typeguards";
import { defaultUser } from "./mock";
function App() {
  const [errorSearch, setErrorSearch] = useState(false);
  const [github, setGithub] = useState<null | LocalGithubUser>();
  const URL_GITHUB = "https://api.github.com/users/";
  const searchGithubRepos = async (text: string) => {
    const url = URL_GITHUB + text;
    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;
    if (isGithubUser(user)) {
      setGithub(extractLocalUser(user));
    } else {
      setErrorSearch(true);
    }
  };
  console.log(github);
  return (
    <Container>
      <TheHeader />
      <Search hasError={errorSearch} onSubmit={searchGithubRepos} />
      {github ? <UserCard {...github} /> : <UserCard {...defaultUser} />}
    </Container>
  );
}

export default App;
