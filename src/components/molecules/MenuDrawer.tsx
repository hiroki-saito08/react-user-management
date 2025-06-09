import { memo, type FC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickUserSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickUserSetting,
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              w="100%"
              onClick={() => {
                onClickHome();
                onClose();
              }}
            >
              Top
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickUserManagement();
                onClose();
              }}
            >
              ユーザー一覧
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickUserSetting();
                onClose();
              }}
            >
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
