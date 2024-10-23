import {
  Datagrid,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  useRecordContext,
  EditButton,
  TopToolbar,
  SelectColumnsButton,
  ExportButton,
  DatagridConfigurable,
} from "react-admin";
import "../custom.css";
import { PosterFilterSidebar } from "./FilterList";

const PosterListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
);

const UrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <a href={record[source]} target="_blank">
        View
      </a>
    </div>
  );
};

export const PosterList = () => (
  <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
    {/* <Datagrid> */}
    <DatagridConfigurable>
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories">
        <TextField
          source="name"
          //   sx={{
          //     listStyle: "none !important ",
          //     textDecoration: "none !important",
          //   }}
          className="no-underline"
        />
      </ReferenceField>
      <TextField source="title" />
      <NumberField source="width" label="width(cm)" />
      <NumberField source="height" label="height(cm)" />
      <NumberField source="price" />

      <ImageField
        source="thumbnail"
        title="title"
        sx={{ "& img": { maxWidth: 80, maxHeight: 80, objectFit: "contain" } }}
      />

      <UrlField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" sx={{ fontWeight: "bold" }} emptyText="N/A" />
      <EditButton />
      {/* </Datagrid> */}
    </DatagridConfigurable>
  </List>
);
