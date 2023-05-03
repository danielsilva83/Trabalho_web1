INPUT|FILE OUTPUT|PATH  FILE JOB
----|------|----------|------------|-------------------|
1|Data Miner unificado|Atualização/Dados/DATAMINER_UNIFICADO_v02_20230110.xlsx|Atualização/Dados/DATAMINER_manufatura.parquet|python totvs_refactor/|jobs/data_miner_unificado/main.py
|||||
2|Uso clientes Manufatura|Atualização/Dados/USO_CLIENTES_MANUFATURA_0{m}{year}.txt|stata/dados/atualiza_uso.parquet|totvs_refactor/jobs/uso_clientes_manufatura/main.py
|||Atualização/Dados/USO_CLIENTES_MANUFATURA_{m}{year}.txt||
|||Atualização/Dados/USO_CLIENTES_MANUFATURA_tri_{year}_{m}.txt||
|||||
3|Área definition manufatura|Atualização/Dados/AreaDefinition_V03  - Manufatura_20230110.xlsx|stata/dados/niveis_rotinas_unicas.parquet||totvs_refactor/totvs_refactor/jobs/area_definition_manufatura
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210219/cloud_analytics.xlsx|stata/dados/processo2.parquet|
|||stata/dados/niveis_rotinas.parquet|
|||||
4|Resumo projeto|resumo_projetos_function_2019*.csv|base_clientes_uso.parquet|totvs_refactor/jobs/resumo_projetos/main.py
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2020.csv||
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2019.csv||
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2021.csv||
|||atualiza_uso.parquet||
|||||
5|Base clientes Manufatura|Atualização/Dados/AreaDefinition_V03  - Manufatura_20230110.xlsx|stata/dados/processo_*.parquet|totvs_refactor/jobs/area_definition_manufatura/main.py
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210219/cloud_analytics.xls|stata/dados/processo2.parquet|
|||stata/dados/niveis_rotinas.parquet|
|||stata/dados/niveis_rotinas_unicas.parquet|
|||||
6|Append data frame pesos geral|stata/dados/pesos_geral_novo_Datasul.parquet |stata/dados/pesos_geral_novo.parquet|totvs_refactor/jobs/append_data_frame_pesos_geral/main.py
|||tata/dados/pesos_geral_novo_Logix.parquet||
|||stata/dados/pesos_geral_novo_Protheus.parquet||
|||||
7|Append data frames processo jornada|stata/dados/pesos_processo_jornada_novo_Datasul.parquet |stata/dados/pesos_processo_jornada_novo.parquet|totvs_refactor/jobs/append_data_frames_processo_jornada/main.py
|||stata/dados/pesos_processo_jornada_novo_Logix.parquet ||
|||stata/dados/pesos_processo_jornada_novo_Protheus.parquet||
|||||
8|BAse clientes acesso novo gera pesos geral novo|stata/porte_segmento2.parquet|Base_Clientes_acesso_novo.parquet|totvs_refactor/jobs/|base_clientes_acesso_novo_gera_pesos_geral_novo/main.py
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2019.csv||
|||||
9|Base clientes uso manufatura|Atualização/Dados/DATAMINER_manufatura.parquet|tata/dados/clientes_manufatura.parquet|totvs_refactor/jobs/|base_clientes_uso/main.py
|||||
10|Base nova 2o tri|stata/dados/base_nova_2tri|tata/score_novo_*.parquet|totvs_refactor/jobs/base_nova_2tri/main.py
|||stata/dados/pesos_geral_novo.parquet||
|||||
11|Base rotina gera nivel prosc|totvs_novo.parquet|tabela_Totvs_atualizada.parquet|totvs_refactor/jobs/base_rotina_gera_nivel_prosc/main.py
|||classificacao_nivel.parquet||
|||||
12|Data minver unificado|Base_Clientes_acesso_novo.parquet|stata/dados/pesos_' + * + '_novo_' + * + '.parquet'|totvs_refactor/jobs/data_miner_unificado/main.py
|||stata/dados/processo_*.parquet|stata/dados/pesos_processo_jornada_novo_' + * + '.parquet'|
|||||
13|Drop duplicate columns|stata/dados/pesos_' + * + '_novo_' + * + '.parquet'|stata/dados/pesos_geral_novo_' + lin + '.parquet'|totvs_refactor/jobs/|drop_duplicate_columns/main.py
|||||
14|Gera base rotinas|stata/dados/pesos_geral_novo_Datasul.parquet|stata/dados/pesos_geral_novo.parquet'|totvs_refactor/jobs/gera_base_rotinas/main.py
|||stata/dados/pesos_geral_novo_Logix.parquet||
|||stata/dados/pesos_geral_novo_Protheus.parquet||
|||||
15|Gera bases nivel tri|stata/porte_segmento2_linha.parquet|base_nivel_tri|totvs_refactor/jobs/gera_bases_nivel_tri/main.py
|||stata/dados/Base_Clientes_Uso8.parquet||
|||||
|||||
16|Gera classificação tri|stata/dados/niveis_rotinas.parquet'|stata/dados/linha_rotinas.parquet|totvs_refactor/jobs/gera_classificacao_nivel/main.py
|||||
17|Gera de-para id e porte segumento2|Atualização/Dados/DATAMINER_manufatura.parquet |depara_id.parquet|totvs_refactor/jobs/|gera_depara_id_e_porte_segmento2/main.py
|||||
18|Gera porte segmento2linha|stata/dados/Base_Clientes_Uso8.parquet|stata/dados/porte_segmento_final.parquet'|totvs_refactor/jobs/gera_porte_segmento2_linha/main.py
|||stata/porte_segmento2_linha.parquet|stata/dados/base_nova_2tri _* .parquet|
|||||
19|Gera scores|stata/dados/pesos_geral_novo.parquet|stata/score_novo_seg _*.parquet'|totvs_refactor/jobs/gera_scores/main.py
|||stata/dados/base_nova_2tri_*.parquet||
|||||
20|Gera scores novo|stata/score_novo_seg _*.parquet'|stata/score_novo_seg _*.parquet'|totvs_refactor/jobs/gera_scores_novo/main.py
|||||
21|Merge atualiza table tovs|stata/leitura/*.parquet|totvs_novo.parquet'|totvs_refactor/jobs/merge_atualiza_tabela_totvs/main.py
|||stata/dados/pesos_processo_jornada_novo.parquet||
|||stata/dados/porte_segmento_final.parquet||
|||||
22|Merge base clientes and pesos linhas|stata/dados/Base_Clientes_Uso8.parquet|base_nivel_tri' *.parquet'|totvs_refactor/jobs/merge_base_clientes_and_pesos_linhas/main.py
|||stata/porte_segmento2_linha.parquet||
|||||
23|Merge base clientes and processo linha|base_nivel_tri*.parquet'|"""base_rotinas.parquet"""|totvs_refactor/jobs/|merge_base_clientes_and_processo_linha/main.py
|||||
24|Merge Data Frames|"""base_rotinas.parquet"""|"""classificacao_nivel.parquet"""|totvs_refactor/jobs/merge_data_frames/main.py
|||||
25|Merge linha cliente atualiza linha|totvs_novo.parquet|"""classificacao_nivel_atualizada.parquet"""|totvs_refactor/jobs/merge_data_frames/main.py
|||classificacao_nivel.parquet||
||||
26|Merge resumo projetos funciton 2019 e porte segumento2|leitura_ajuste/*.parquet|classificacao_nivel.parquet|totvs_refactor/jobs/merge_resumo_projetos_function_2019_porte_segmento2/main.py
||||
27|Resumo projetos|Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2019.csv|stata/dados/Base_Clientes_Uso8.parquet|totvs_refactor/jobs/resumo_projetos/main.py
|||Base Dados FIPE-20210106T003718Z-001/Base Dados| |
|||stata/dados/atualiza_uso.parquetFIPE/recebidos_20210630/resumo_projetos_function_2020.csv| |
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2021.csv| |
||||
28|Uso clientes manufatura|classificacao_nivel.parquet / totvs_novo.parquet /|tabela_Totvs_atualizada.parquet|totvs_refactor/jobs/uso_clientes_manufatura/main.pymerge_resumo_projetos_function_2019_porte_segmento2/main.py
||||
27|Resumo projetos|Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2019.csv|stata/dados/Base_Clientes_Uso8.parquet|totvs_refactor/jobs/resumo_projetos/main.py
|||Base Dados FIPE-20210106T003718Z-001/Base Dados| |
|||stata/dados/atualiza_uso.parquetFIPE/recebidos_20210630/resumo_projetos_function_2020.csv| |
|||Base Dados FIPE-20210106T003718Z-001/Base Dados FIPE/recebidos_20210630/resumo_projetos_function_2021.csv| |
||||
28|Uso clientes manufatura|classificacao_nivel.parquet / totvs_novo.parquet /|tabela_Totvs_atualizada.parquet|totvs_refactor/jobs/uso_clientes_manufatura/main.py
