import {
   makeStyles,
   Subtitle2,
   // shorthands,
   Card,
   CardHeader,
   tokens,
   shorthands,
 } from "@fluentui/react-components";
 
 
 interface ContainerProps {
   name?: string;
 }

 const useStyles = makeStyles({
   card: {
      boxShadow: tokens.shadow2,
      maxWidth: "100%",
      minHeight: "fit-content",
      height: "100%",
      ...shorthands.borderRadius(tokens.borderRadiusSmall),
   },
 });
 
 export const ContainerCard: React.FC<ContainerProps> = ({ children, name }) => {
   const styles = useStyles();
 
   return (
     <Card className={styles.card}>
       <CardHeader
         header={
           <Subtitle2>
             {name}
           </Subtitle2>
         }
       />
       {children}
     </Card>
   );
 };

export default ContainerCard;
