import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllClientAccounts } from "../../store/reducers/account";
import { useEffect } from "react";

import { Stack, Divider, Typography } from "@mui/material";
import ClientAccountCard from "../../components/management/";
import { EAccountType } from "../../enums";

function Management() {
  const dispatch = useDispatch<AppDispatch>();
  const clientAccounts = useSelector(
    (state: RootState) => state.account.accounts
  );

  useEffect(() => {
    dispatch(getAllClientAccounts());
  }, [dispatch]);

  return (
    <Stack>
      <Stack
        spacing={5}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Typography
          className="m-2"
          variant="body1"
          color="text.primary"
          gutterBottom
        >
          Listes des comptes clients:
        </Typography>

        <div className="flex flex-wrap justify-center gap-4 ">
          {clientAccounts &&
            clientAccounts.filter((account) => account.accountType === EAccountType.CLIENT).map((account, index) => (
              <ClientAccountCard account={account} key={index} />
            ))}
        </div>
      </Stack>
    </Stack>
  );
}

export default Management;
