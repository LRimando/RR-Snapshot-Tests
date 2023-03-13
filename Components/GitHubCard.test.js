import GitHubCard from "./GitHubCard"
import renderer from "react-test-renderer"

test('renders card component', () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})