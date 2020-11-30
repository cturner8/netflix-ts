import { OptForm } from "../components";

interface Props {}

export const OptFormContainer: React.FC<Props> = () => {
  return (
    <OptForm>
      <OptForm.Input placeholder="Email address" />
      <OptForm.Button>Try it now</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
    </OptForm>
  );
};
